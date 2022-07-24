import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class GetLinkDto {
  @ApiProperty()
  @IsNotEmpty()
  code: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  secret?: string;
}
