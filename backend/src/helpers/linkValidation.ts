import { URL } from "url";

export default function linkValidation(link: string): boolean {
  try {
    new URL(link);
    return true;
  } catch (err) {
    return false;
  }
}
