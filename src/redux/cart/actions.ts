import * as types from "./types";
import { IPizzaObject } from "../../types";

export const addItem = (payload: IPizzaObject) => {
  return { type: types.ADD_ONE, payload: payload };
};

export const deleteItem = (payload: IPizzaObject) => {
  return { type: types.DELETE_ITEM, payload: payload };
};

export const wipeCart = () => {
  return { type: types.WIPE_CART };
};

export const deleteEntry = (payload: IPizzaObject) => {
  return { type: types.DELETE_ENTRY, payload: payload };
};
