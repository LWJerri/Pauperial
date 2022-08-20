import { ApiProperty, ApiPropertyOptional, OmitType } from "@nestjs/swagger";
import { Link } from "@prisma/client";

export class LinkEntity implements Link {
  @ApiProperty()
  id: string;

  @ApiProperty()
  deleteKey: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  code: string;

  @ApiPropertyOptional({ nullable: true })
  secret: string;

  @ApiProperty()
  views: number;

  @ApiProperty()
  createAt: Date;
}

export class CreateLinkEntity extends LinkEntity {
  @ApiProperty()
  qrCode: string;
}

export class GetLinkEntity extends OmitType(CreateLinkEntity, ["deleteKey"]) {}
