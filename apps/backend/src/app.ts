import express from "express";
import { join } from "path";
import "source-map-support/register";

const app = express();

app.use(express.static(join(__dirname, "..", "..", "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "frontend", "dist", "index.html"));
});

app.listen(4000, () => {
  console.log(" > Coming Soon page launced!");
});
