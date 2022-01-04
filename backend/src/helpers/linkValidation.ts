import { URL } from "url";
import validURL from "valid-url";

export default function linkValidation(link: string): boolean {
  try {
    if (!validURL.isWebUri(link)) return false;

    new URL(link);

    return true;
  } catch (err) {
    return false;
  }
}
