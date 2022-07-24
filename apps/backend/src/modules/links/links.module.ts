import { Module } from "@nestjs/common";
import { LinksService } from "./links.service";
import { LinksController } from "./links.controller";
import { PrismaService } from "../prisma/prisma.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaService, PrismaModule],
  controllers: [LinksController],
  providers: [LinksService],
})
export class LinksModule {}
