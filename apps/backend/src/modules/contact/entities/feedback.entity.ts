import { ApiProperty } from "@nestjs/swagger";

export class FeedbackEntity {
  @ApiProperty()
  delivered: boolean;
}
