import { IPizzaInCart } from "../../types";

export const addItem = (payload: IPizzaInCart) => {
  return { type: "UPDATE:CART:ITEM", payload: payload };
};

export const wipeCart = () => {
  return { type: "WIPE:CART:ITEMS" };
};

export const deleteItem = (payload: IPizzaInCart) => {
  return { type: "DELETE:CART:ITEM", payload: payload };
};
export const deleteItems = (payload: IPizzaInCart) => {
  return { type: "DELETE:CART:ITEMS", payload: payload };
};
