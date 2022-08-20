import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DeleteLinkDto {
  @ApiProperty()
  @IsNotEmpty()
  deleteKey: string;
}
