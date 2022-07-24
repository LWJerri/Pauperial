import { Controller, Get } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { StatsEntity } from "./entities/stats.entity";
import { StatsService } from "./stats.service";

@Controller("api/stats")
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  @ApiTags("stats")
  @ApiResponse({ type: StatsEntity, status: 200 })
  get() {
    return this.statsService.get();
  }
}
