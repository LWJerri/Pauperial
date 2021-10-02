import qr from "qrcode";

export default async function generateQR(link: string): Promise<string> {
  return new Promise((resolve, reject) => {
    qr.toDataURL(link, (err, url) => {
      if (err) reject(err);
      else resolve(url);
    });
  });
}
