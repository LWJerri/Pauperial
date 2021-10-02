import type { Request, Response } from "express";
import { nanoid } from "nanoid";
import { Links } from "../typeorm/entities/Links";
import { getRepository } from "typeorm";
import linkValidator from "../helpers/linkValidator";
import generateQR from "../helpers/qr";

export async function postLink(req: Request, res: Response) {
  try {
    if (!req.body.link || !linkValidator(req.body.link)) return res.status(400).json({ error: true, message: "You pasted not valid link" });

    const codeRepository = getRepository(Links);
    const code = nanoid(10);
    const qrLink = await generateQR(new URL(`${req.body.origin}/${code}${req.body.secret ? `?secret=${req.body.secret}` : ""}`).toString());
    const link = await codeRepository.save({ code: code, link: req.body.link, views: 0, secret: req.body.secret, qrData: qrLink });

    return res.status(200).json({ error: false, ...link });
  } catch (err) {
    console.error("postLink error:", err);

    return res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}
