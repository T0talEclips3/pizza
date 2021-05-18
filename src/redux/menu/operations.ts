import axios from "axios";
import { Dispatch } from "redux";
import { IMenuItem, IReduxAction } from "../../types";
import * as actions from "./actions";

export const fetchPizzas = (
  category: number | null,
  sorting: { name: string; type: string }
) => (dispatch: Dispatch<IReduxAction<IMenuItem[]>>) => {
  axios
    .get(
      `https://my-json-server.typicode.com/T0talEclips3/pizza/pizzas${
        category !== null
          ? `?category=${category}&_sort=${sorting.type}&_order=desc`
          : `${sorting.type !== null ? `?_sort=${sorting.type}&_order=desc` : ""}`
      }`
    )
    .then(({ data }) => {
      dispatch(actions.storePizzas(data));
    });
};
