import { ApiProperty } from "@nestjs/swagger";

class LinkEntityStats {
  @ApiProperty()
  total: number;

  @ApiProperty()
  today: number;
}

class PhotoEntityStats {
  @ApiProperty()
  total: number;

  @ApiProperty()
  today: number;
}

export class StatsEntity {
  @ApiProperty()
  link: LinkEntityStats;

  @ApiProperty()
  photo: PhotoEntityStats;
}
