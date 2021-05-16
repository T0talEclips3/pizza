import { IMenuItem } from "../../types";
import { STORE_PIZZAS } from "./types";

export const storePizzas = (paylaod: IMenuItem[]) => {
  return { type: STORE_PIZZAS, payload: paylaod };
};
