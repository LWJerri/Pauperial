import type { Request, Response } from "express";
import { getRepository } from "typeorm";
import getLink from "../helpers/getLink";
import { Links } from "../typeorm/entities/Links";

export async function getCode(req: Request, res: Response) {
  try {
    const link = await getLink(req.params.id, req.headers.host);
    if (!link || link.error) return res.status(400).json({ error: true, message: "Code doesn't exist" });

    getRepository(Links).update({ code: req.params.id }, { views: link.views + 1 });

    if (link.secret && req.query.secret !== link.secret)
      return res.status(403).json({ error: true, message: "Wrong secret for that link" });

    return res.status(200).json({ error: false, ...link });
  } catch (err) {
    console.error("getCode error:", err);

    return res.status(500).json({ error: true, message: "Internal Server Error" });
  }
}
