import { IReduxAction } from "../../types";

const defaultState = {
  category: null,
  sortBy: "rating",
};

const filters = (
  state = defaultState,
  action: IReduxAction<number | string | null>
) => {
  switch (action.type) {
    case "SET:CATEGORY":
      return { ...state, category: action.payload };
    case "SET:SORTBY":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export default filters;
