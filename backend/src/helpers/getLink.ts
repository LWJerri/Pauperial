import { getRepository } from "typeorm";
import { Links } from "../typeorm/entities/Links";
import generateQR from "./qr";

export default async function getLink(code: string, host: string) {
  const link = await getRepository(Links).findOne({ code });

  try {
    if (!link) throw new Error("Code not found");

    const qrData = await generateQR(new URL(`http://${host}/${code}${link.secret ? `?secret=${link.secret}` : ""}`).toString());

    return {
      error: false,
      ...link,
      qrData,
    };
  } catch (err) {
    return { error: true, message: err.message, ...link };
  }
}
