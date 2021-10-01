import type { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Links } from "../typeorm/entities/Links";

export async function getCode(req: Request, res: Response) {
  try {
    const errResp = { code: req.params.id, link: null, views: null };
    const codeRepository = getRepository(Links);
    const findCode = await codeRepository.findOne({ code: req.params.id });

    if (!findCode) return res.status(400).json(errResp);

    res.status(200).json({ code: req.params.id, link: findCode.link, views: findCode.codeUses });

    findCode.codeUses = findCode.codeUses + 1;
    return codeRepository.save(findCode);
  } catch (err) {
    console.error("getCode error:", err);

    return res.status(500).json({ message: "Internal Server Error" });
  }
}
