import axios from "axios";
import { Dispatch } from "redux";
import { IPizza, IReduxAction } from "../../types";
import * as actions from "./actions";

export const fetchPizzas = (
  category: number | null,
  sortBy: { name: string; type: string }
) => (dispatch: Dispatch<IReduxAction<IPizza[]>>) => {
  axios
    .get(
      `http://localhost:3001/pizzas${
        category !== null
          ? `?category=${category}&_sort=${sortBy.type}&_order=desc`
          : `${sortBy.type !== null ? `?_sort=${sortBy.type}&_order=desc` : ""}`
      }`
    )
    .then(({ data }) => {
      dispatch(actions.storePizzas(data));
    });
};
