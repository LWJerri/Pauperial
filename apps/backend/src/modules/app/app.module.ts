import { CacheModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import type { ClientOpts } from "redis";
import * as redisStore from "cache-manager-redis-store";
import { MainConfigService } from "../config/config.service";
import { TelegramBotConfig } from "../config/configs/telegram.config";
import { ContactController } from "../contact/contact.controller";
import { ContactService } from "../contact/contact.service";
import { LinksController } from "../links/links.controller";
import { LinksService } from "../links/links.service";
import { PrismaModule } from "../prisma/prisma.module";
import { StatsController } from "../stats/stats.controller";
import { StatsService } from "../stats/stats.service";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    CacheModule.register<ClientOpts>({ store: redisStore, host: "dev.lwjerri.ml", port: 6379 }),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
  ],
  controllers: [AppController, LinksController, ContactController, StatsController],
  providers: [AppService, MainConfigService, LinksService, ContactService, TelegramBotConfig, StatsService],
})
export class AppModule {}
