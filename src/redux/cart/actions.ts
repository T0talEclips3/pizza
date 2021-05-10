import * as types from "./types";
import { IPizzaInCart } from "../../types";

export const addItem = (payload: IPizzaInCart) => {
  return { type: types.ADD_ONE, payload: payload };
};

export const deleteItem = (payload: IPizzaInCart) => {
  return { type: types.DELETE_ITEM, payload: payload };
};

export const wipeCart = () => {
  return { type: types.WIPE_CART };
};

export const deleteEntry = (payload: IPizzaInCart) => {
  return { type: types.DELETE_ENTRY, payload: payload };
};
