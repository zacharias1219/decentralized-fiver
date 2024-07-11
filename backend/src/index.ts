import express from "express";
import userRouter from "./routers/user"
import workerRouter from "./routers/worker"

export const JWT_SECRET = "zach123";

const app = express();

app.use(express.json());

app.use("/v1/user", userRouter);
app.use("/v1/worker", workerRouter);