import { Injectable } from "@nestjs/common";
import { TelegramBotConfig } from "../config/configs/telegram.config";
import { FeedbackDto } from "./dto/feedback";
import axios from "axios";

@Injectable()
export class ContactService {
  constructor(readonly telegramConfig: TelegramBotConfig) {}

  async feedback(body: FeedbackDto) {
    const { email, message } = body;

    const { token, userId } = this.telegramConfig;
    const baseURL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}`;
    const APIRequest = encodeURI(`${baseURL}&text=**EMAIL:** ${email}\n**MESSAGE:** ${message}`);

    try {
      await axios.get(APIRequest);

      return { delivered: true };
    } catch (err) {
      return { delivered: false };
    }
  }
}
