import type { Request, Response } from "express";
import { getRepository, MoreThanOrEqual } from "typeorm";
import { Links } from "../typeorm/entities/Links";

export async function stats(req: Request, res: Response) {
  try {
    const linkRepo = getRepository(Links);

    const total = await linkRepo.count();
    const today = (await linkRepo.find({ where: { createdAt: MoreThanOrEqual(Date.now() - 1000 * 60 * 60 * 24) } })).length;

    return res.status(200).send({ error: false, total, today });
  } catch (err) {
    console.error("stats error:", err);

    return res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}
