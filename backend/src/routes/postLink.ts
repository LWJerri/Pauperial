import type { Request, Response } from "express";
import { nanoid } from "nanoid";
import { Links } from "../typeorm/entities/Links";
import { URL } from "url";
import { getRepository } from "typeorm";

const isLinkValid = (link: string) => {
  try {
    new URL(link);
    return true;
  } catch (err) {
    return false;
  }
};

export default async function postLink(req: Request, res: Response) {
  try {
    if (!req.body.link || !isLinkValid(req.body.link)) {
      return res.status(400).json({ code: null, link: req.body.link, views: null, message: 'You pasted not valid link.' })
    };

    const codeRepository = getRepository(Links);
    const link = await codeRepository.save({ code: nanoid(10), link: req.body.link, codeUses: 0, secret: req.body.secret });

    return res.status(200).json({ ...link, views: link.codeUses });
  } catch (err) {
    console.error("postLink error:", err);

    return res.status(500).json({ message: "Internal Server Error" });
  }
}
