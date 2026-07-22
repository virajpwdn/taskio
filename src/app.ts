import "dotenv/config";
import express from "express";
import { prisma } from "./lib/prisma";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/v1/users", require("./routes/user.routes").default);


export default app;