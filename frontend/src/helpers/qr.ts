import qr from "qrcode";

export const generateQr = (link: string) => {
  return new Promise((resolve, reject) => {
    qr.toDataURL(link, (err, url) => {
      if (err) reject(err);
      else resolve(url);
    });
  });
};