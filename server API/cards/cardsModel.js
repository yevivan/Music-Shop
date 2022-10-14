import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  img: String,
  price: String,
  description: String,
  isFavorite: Boolean,
});

export const CardsModel = mongoose.model("cards", schema);
