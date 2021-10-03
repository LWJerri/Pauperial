import type { Request, Response } from "express";
import { nanoid } from "nanoid";
import { Links } from "../typeorm/entities/Links";
import { getRepository } from "typeorm";
import linkValidation from "../helpers/linkValidation";
import getLink from "../helpers/getLink";

export async function postLink(req: Request, res: Response) {
  try {
    if (!req.body.link || !linkValidation(req.body.link)) return res.status(400).json({ error: true, message: "You post invalid link" });

    const codeRepository = getRepository(Links);
    let code = nanoid(Math.floor(Math.random() * 15) + 5);

    await codeRepository.save({ code: code, link: req.body.link, views: 0, secret: req.body.secret });

    return res.status(200).json({ error: false, ...(await getLink(code, req.headers.host)) });
  } catch (err) {
    console.error("postLink error:", err);

    return res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}
