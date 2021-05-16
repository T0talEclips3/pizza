import * as types from "./types";
import { IReduxAction } from "../../types";

const defaultState = {
  category: null,
  sorting: { name: "Популярности", type: "rating" },
};

const filters = (
  state = defaultState,
  action: IReduxAction<number | string | null>
) => {
  switch (action.type) {
    case types.SET_PIZZA_CATEGORY:
      return { ...state, category: action.payload };
    case types.SET_SORTING_TYPE:
      return { ...state, sorting: action.payload };
    default:
      return state;
  }
};

export default filters;
