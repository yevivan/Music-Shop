import { getCards } from "./cardsController.js";
import { Router } from "express";

export const cardsRouter = Router();
cardsRouter.get("", getCards);
