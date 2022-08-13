import { getRepository } from "typeorm";
import { Links } from "../typeorm/entities/Links";
import generateQR from "./qr";

export default async function getLink(code: string, host: string) {
  const link = await getRepository(Links).findOne({ where: { code } });

  try {
    if (!link) throw new Error("Code didn't exist!");

    const qrLink = new URL(`http://${host}/${code}${link.secret ? `?secret=${link.secret}` : ""}`).toString();
    const qrData = await generateQR(qrLink);

    return {
      error: false,
      ...link,
      qrData,
      message: "ok.",
    };
  } catch (err) {
    return { error: true, message: err.message, ...link };
  }
}
