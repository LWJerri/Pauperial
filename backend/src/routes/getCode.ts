import type { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Links } from "../typeorm/entities/Links";

export default async function getCode(req: Request, res: Response) {
  try {
    const errResp = { code: req.params.id, link: null, views: null };
    const linkRepository = getRepository(Links);
    const link = await linkRepository.findOne({ code: req.params.id });

    if (!link) return res.status(400).json(errResp);
    if (link.secret && req.query.code !== link.secret) {
      return res.status(403).json({ message: 'Wrong secret for that link' })
    }

    res.status(200).json({ code: req.params.id, link: link.link, views: link.codeUses });

    link.codeUses = link.codeUses + 1;
    return linkRepository.save(link);
  } catch (err) {
    console.error("getCode error:", err);

    return res.status(500).json({ message: "Internal Server Error" });
  }
}
