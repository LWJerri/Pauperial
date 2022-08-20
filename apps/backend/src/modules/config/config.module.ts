import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MainConfigService } from "./config.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [ConfigService, MainConfigService],
  exports: [MainConfigService],
})
export class mainConfigModule {}
