import { CardsDataLayer } from "./cardsDatalayer.js";

const dataLayer = new CardsDataLayer();

export const getCards = async (req, res) => {
  try {
    const data = await dataLayer.getCards();
    console.log(data);
    res.json({ status: "200", data });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};
