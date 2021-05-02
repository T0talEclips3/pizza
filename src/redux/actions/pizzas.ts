import { IPizza } from "../../types";
export const setPizzas = (paylaod: IPizza[]) => {
  return { type: "SET:PIZZAS", payload: paylaod };
};
