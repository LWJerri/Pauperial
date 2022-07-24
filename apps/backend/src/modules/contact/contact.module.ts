import { Module } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactController } from "./contact.controller";
import { ConfigModule } from "@nestjs/config";
import { TelegramBotConfig } from "../config/configs/telegram.config";

@Module({
  controllers: [ContactController],
  providers: [ContactService],
  imports: [ConfigModule, TelegramBotConfig],
})
export class ContactModule {}
