import type { Request, Response } from "express";

export async function unknown(req: Request, res: Response) {
  try {
    return res.status(404).json({ message: "Endpoint not found!" });
  } catch (err) {
    console.error("unknown error:", err);

    return res.status(500).json({ message: "Internal Server Error" });
  }
}
