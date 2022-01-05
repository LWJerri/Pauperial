import type { Request, Response } from "express";
import { nanoid } from "nanoid";
import { Links } from "../typeorm/entities/Links";
import { getRepository } from "typeorm";
import linkValidation from "../helpers/linkValidation";
import getLink from "../helpers/getLink";

export async function postLink(req: Request, res: Response) {
  try {
    const { link, secret } = req.body;

    if (!link || !linkValidation(link)) return res.status(400).json({ error: true, message: "You provide an incorrect URL!" });

    const codeRepository = getRepository(Links);
    const code = nanoid(5);

    await codeRepository.save({ code, link, secret, createdAt: String(Date.now()) });

    return res.status(200).json({ error: false, ...(await getLink(code, req.headers.host)) });
  } catch (err) {
    console.error("postLink error:", err);

    return res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}
