import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class StatsService {
  constructor(readonly prisma: PrismaService) {}

  async get() {
    const gte = { gte: new Date(new Date().setUTCHours(0, 0, 0, 0)) };

    const [linksTotal, linksToday] = await Promise.all([
      this.prisma.link.count(),
      this.prisma.link.count({ where: { createAt: gte } }),
    ]);

    return { link: { total: linksTotal, today: linksToday } };
  }
}
