import express from "express";
import cors from "cors";
import { cardsRouter } from "../server API/cards/cardsRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", cardsRouter);

export default app;
