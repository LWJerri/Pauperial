import type { Request, Response } from "express";
import { nanoid } from "nanoid";
import { Links } from "../typeorm/entities/Links";
import { URL } from "url";
import { getRepository } from "typeorm";

export async function postLink(req: Request, res: Response) {
  try {
    const errResp = { code: null, link: req.body.link, views: null };
    const checker = (link: string) => {
      try {
        new URL(req.body.link);
        return true;
      } catch (err) {
        return false;
      }
    };

    if (!req.body.link || !checker(req.body.link)) return res.status(400).json(errResp);

    const codeRepository = getRepository(Links);
    const findLink = await codeRepository.findOne({ link: req.body.link });

    if (findLink) return res.status(200).json({ code: findLink.code, link: req.body.link, views: findLink.codeUses });

    const newLink = await codeRepository.save({ code: nanoid(10), link: req.body.link, codeUses: 0 });

    return res.status(200).json({ code: newLink.code, link: newLink.link, views: newLink.codeUses });
  } catch (err) {
    console.error("postLink error:", err);

    return res.status(500).json({ message: "Internal Server Error" });
  }
}
