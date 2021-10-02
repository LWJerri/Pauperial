import type { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Links } from "../typeorm/entities/Links";

export async function getCode(req: Request, res: Response) {
  try {
    const linkRepository = getRepository(Links);
    const link = await linkRepository.findOne({ code: req.params.id });

    if (!link) return res.status(400).json({ error: true, message: "Code not found" });
    if (link.secret && req.query.secret !== link.secret)
      return res.status(403).json({ error: true, message: "Wrong secret for that link" });

    res
      .status(200)
      .json({ error: false, code: req.params.id, link: link.link, views: link.views, secret: link.secret, qrData: link.qrData });

    link.views = link.views + 1;
    return linkRepository.save(link);
  } catch (err) {
    console.error("getCode error:", err);

    return res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}
