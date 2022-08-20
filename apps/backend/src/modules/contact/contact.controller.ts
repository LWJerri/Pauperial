import { Controller, Post, Body } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ContactService } from "./contact.service";
import { FeedbackDto } from "./dto/feedback";
import { FeedbackEntity } from "./entities/feedback.entity";

@Controller("api/contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post("feedback")
  @ApiTags("contact")
  @ApiResponse({ type: FeedbackEntity, status: 200 })
  feedback(@Body() body: FeedbackDto) {
    return this.contactService.feedback(body);
  }
}
