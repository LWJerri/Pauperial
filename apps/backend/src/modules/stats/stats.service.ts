import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class StatsService {
  constructor(readonly prisma: PrismaService) {}

  async get() {
    const gte = { gte: new Date(new Date().setUTCHours(0, 0, 0, 0)) };

    const [linksTotal, linksToday, photosTotal, photosToday] = await Promise.all([
      this.prisma.link.count(),
      this.prisma.link.count({ where: { createAt: gte } }),
      this.prisma.photo.count(),
      this.prisma.photo.count({ where: { createAt: gte } }),
    ]);

    return { link: { total: linksTotal, today: linksToday }, photo: { total: photosTotal, today: photosToday } };
  }
}
