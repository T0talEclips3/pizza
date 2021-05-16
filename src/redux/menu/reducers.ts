import { IMenuItem, IReduxAction } from "../../types";
import { STORE_PIZZAS } from "./types";

const defaultState = {
  menuItems: [],
  isLoaded: false,
};

const menu = (state = defaultState, action: IReduxAction<IMenuItem[]>) => {
  switch (action.type) {
    case STORE_PIZZAS:
      return { isLoaded: true, menuItems: action.payload };
    default:
      return state;
  }
};

export default menu;
