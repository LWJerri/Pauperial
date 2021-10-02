import { getRepository } from "typeorm";
import { Links } from "../typeorm/entities/Links";
import generateQR from "./qr";

export default async function getLink(code: string, host: string) {
  const link = await getRepository(Links).findOne({ code });

  if (!link) throw new Error("Link not found");

  const qrData = await generateQR(new URL(`http://${host}/${code}${link.secret ? `?secret=${link.secret}` : ""}`).toString());

  return {
    ...link,
    qrData,
  };
}
