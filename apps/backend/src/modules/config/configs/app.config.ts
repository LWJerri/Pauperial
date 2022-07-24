import { Injectable } from "@nestjs/common";
import { MainConfigService } from "../config.service";

@Injectable()
export class AppConfig {
  readonly port: number;

  constructor(private readonly configService: MainConfigService) {
    this.port = this.configService.get<number>("PORT");
  }
}
