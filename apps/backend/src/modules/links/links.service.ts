import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PrismaService } from "../prisma/prisma.service";
import { CreateLinkDto } from "./dto/create-link.dto";
import { DeleteLinkDto } from "./dto/delete.link.dto";
import { GetLinkDto } from "./dto/get-link.dto";
import { toDataURL } from "qrcode";

@Injectable()
export class LinksService {
  constructor(private prisma: PrismaService) {}

  async get(param: GetLinkDto, host: string) {
    const { code, secret } = param;

    const record = await this.prisma.link.findUnique({ where: { code } });

    if (!record) throw new NotFoundException("Record with this code not found!");
    if ((record && record.secret && !secret) || record.secret !== secret)
      throw new ForbiddenException("Please, provide a valid secret key!");

    const [qrCode, viewsUpdate] = await Promise.all([
      toDataURL(`https://${host}/${record.code}|`),
      this.prisma.link.update({ where: { code }, data: { views: { increment: 1 } } }),
    ]);

    delete record["deleteKey"];

    return record;
  }

  async create(body: CreateLinkDto, host: string) {
    const { url, secret } = body;

    const [code, deleteKey] = [randomUUID().slice(0, 6), randomUUID()];

    const [record, qrCode] = await Promise.all([
      this.prisma.link.create({ data: { url, secret, code, deleteKey } }),
      toDataURL(`https://${host}/${code}`),
    ]);

    return { record, qrCode };
  }

  async delete(param: DeleteLinkDto) {
    const { deleteKey } = param;

    const findRecord = await this.prisma.link.findUnique({ where: { deleteKey } });

    if (!findRecord) throw new NotFoundException(`Record with this deleteKey not found!`);

    const record = await this.prisma.link.delete({ where: { deleteKey } });

    return record;
  }
}
