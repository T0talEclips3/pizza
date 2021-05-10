import { IPizza, IReduxAction } from "../../types";
import { STORE_PIZZAS } from "./types";

const defaultState = {
  pizzaObjects: [],
  isLoaded: false,
};

const menu = (state = defaultState, action: IReduxAction<IPizza[]>) => {
  switch (action.type) {
    case STORE_PIZZAS:
      return { isLoaded: true, pizzaObjects: action.payload };
    default:
      return state;
  }
};

export default menu;
