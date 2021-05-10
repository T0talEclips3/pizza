import { IPizza } from "../../types";
import { STORE_PIZZAS } from "./types";

export const storePizzas = (paylaod: IPizza[]) => {
  return { type: STORE_PIZZAS, payload: paylaod };
};
