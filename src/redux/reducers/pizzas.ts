import { IPizza, IReduxAction } from "../../types";

const defaultState = {
  pizzas: [],
  isLoaded: false,
};

const pizzas = (state = defaultState, action: IReduxAction<IPizza[]>) => {
  switch (action.type) {
    case "SET:PIZZAS":
      return { isLoaded: true, pizzas: action.payload };
    default:
      return state;
  }
};

export default pizzas;
