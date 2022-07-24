import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MainConfigService } from "../config/config.service";
import { TelegramBotConfig } from "../config/configs/telegram.config";
import { ContactController } from "../contact/contact.controller";
import { ContactService } from "../contact/contact.service";
import { LinksController } from "../links/links.controller";
import { LinksService } from "../links/links.service";
import { PhotosController } from "../photos/photos.controller";
import { PhotosService } from "../photos/photos.service";
import { PrismaModule } from "../prisma/prisma.module";
import { StatsController } from "../stats/stats.controller";
import { StatsService } from "../stats/stats.service";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule],
  controllers: [AppController, LinksController, ContactController, StatsController, PhotosController],
  providers: [
    AppService,
    MainConfigService,
    LinksService,
    ContactService,
    TelegramBotConfig,
    StatsService,
    PhotosService,
  ],
})
export class AppModule {}
