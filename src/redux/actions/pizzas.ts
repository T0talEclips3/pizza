import axios from "axios";
import { Dispatch } from "redux";
import { IPizza, IReduxAction } from "../../types";

export const fetchPizzas = (category: number | null, sortBy: string) => (
  dispatch: Dispatch<IReduxAction<IPizza[]>>
) => {
  axios
    .get(
      `http://localhost:3001/pizzas${
        category !== null
          ? `?category=${category}&_sort=${sortBy}&_order=desc`
          : `${sortBy !== null ? `?_sort=${sortBy}&_order=desc` : ""}`
      }`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (paylaod: IPizza[]) => {
  return { type: "SET:PIZZAS", payload: paylaod };
};
