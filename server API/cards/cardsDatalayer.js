import { CardsModel } from "./cardsModel.js";

export class CardsDataLayer {
  async getCards() {
    try {
      const cards = await CardsModel.find({});
      return cards;
    } catch (err) {
      throw err;
    }
  }
}
