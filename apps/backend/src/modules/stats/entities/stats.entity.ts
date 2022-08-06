import { ApiProperty } from "@nestjs/swagger";

class LinkEntityStats {
  @ApiProperty()
  total: number;

  @ApiProperty()
  today: number;
}

export class StatsEntity {
  @ApiProperty()
  link: LinkEntityStats;
}
