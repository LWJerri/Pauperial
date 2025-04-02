import express from "express";
import { join } from "path";

const app = express();

app.use(express.static(join(__dirname, "..", "..", "frontend", "dist")));

app.get("/*path", (req, res) => res.sendFile(join(__dirname, "..", "..", "frontend", "dist", "index.html")));

app.listen(4000, () => console.log(" > Coming Soon page launced!"));
