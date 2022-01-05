import "source-map-support";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import boot from "./helpers/boot";
import { getCode, postLink, postMessage, stats } from "./routes";
import { join } from "path";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors(), express.json(), express.static(join(__dirname, "..", "..", "frontend", "dist")));

app.get("/api/code/:id", async (req, res) => getCode(req, res));
app.get("/api/stats", async (req, res) => stats(req, res));
app.post("/api/code", async (req, res) => postLink(req, res));
app.post("/api/message", async (req, res) => postMessage(req, res));
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "frontend", "dist", "index.html"));
});

app.listen(port, async () => boot(port));
