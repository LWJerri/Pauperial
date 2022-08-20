import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsUrl } from "class-validator";

export class CreateLinkDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  secret?: string;
}
