import "source-map-support";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import boot from "./helpers/boot";
import { getCode, postLink, unknown } from "./routes";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors(), express.json());

app.get("/code/:id", async (req, res) => getCode(req, res));
app.post("/code", async (req, res) => postLink(req, res));
app.get("*", async (req, res) => unknown(req, res));

app.listen(port, async () => boot(port));
