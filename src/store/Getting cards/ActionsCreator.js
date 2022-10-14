import { INCREASE_CART_ITEMS } from "../Add to cart/actions";
import { GET_CARDS } from "./actions";
import { SET_FAVORITE_CARD, SET_CARDS_FAVORITES_ON_DOWNLOAD } from "./actions";

// THIS ACTION TO FETCH DATA FROM MONGO DB TROUGH NODE SERVER

export const getCards = () => async (dispatch) => {
  try {
    const cards = await fetch(`http://localhost:3001`)
      .then((res) => res.json())
      .then(({ data }) => data);
    console.log(cards);
    dispatch({ type: GET_CARDS, payload: cards });
    dispatch({ type: SET_CARDS_FAVORITES_ON_DOWNLOAD, payload: cards });
  } catch (err) {
    console.log(err);
  }
};

// THIS ACTION TO FETCH DATA FROM LOCAL FILE INCREASE_CART_ITEMS.json

// export const getCards = () => async (dispatch) => {
//   try {
//     const cards = await fetch(`items.json`).then((res) => res.json());
//     dispatch({ type: GET_CARDS, payload: cards });
//     dispatch({ type: SET_CARDS_FAVORITES_ON_DOWNLOAD, payload: cards });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const addToFavorites = (payload) => (dispatch) => {
  dispatch({ type: SET_FAVORITE_CARD, payload });
};
