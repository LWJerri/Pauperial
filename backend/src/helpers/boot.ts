import { createConnection } from "typeorm";

export default async function boot(port: string | number) {
  try {
    console.log(` > API ready! Port - ${port}`);
    await createConnection();

    console.log(` > Connected to database!`);
  } catch (err) {
    console.error("boot error:", err);
  }
}
