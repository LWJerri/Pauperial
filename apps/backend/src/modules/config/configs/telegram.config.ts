import { Injectable } from "@nestjs/common";
import { MainConfigService } from "../config.service";

@Injectable()
export class TelegramBotConfig {
  readonly token: string;
  readonly userId: string;

  constructor(private readonly configService: MainConfigService) {
    this.token = this.configService.get<string>("BOT_TOKEN");
    this.userId = configService.get<string>("USER_ID");
  }
}
