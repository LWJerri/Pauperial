import type { Request, Response } from "express";
import emailValidator from "email-validator";
import axios from "axios";

export async function postMessage(req: Request, res: Response) {
  try {
    const { email, text } = req.body.form;
    const baseURL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.USER_ID}`;

    if (!emailValidator.validate(email)) return res.status(400).json({ error: true, message: "Please, provide the correct email!" });
    if (text.length > 1000)
      return res.status(400).json({ error: true, message: "Your message is too long! The message must be less than 1000 symbols!" });

    await axios.post(`${baseURL}&text=EMAIL: ${email}\nTEXT: ${text}`);

    return res.status(200).send({ error: false, message: "Your message was submitted! Thanks :3" });
  } catch (err) {
    console.error("postMessage error:", err);

    return res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}
