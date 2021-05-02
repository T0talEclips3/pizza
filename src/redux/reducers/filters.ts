import { IReduxAction } from "../../types";

const defaultState = {
  category: 0,
  sortBy: "popular",
};

const filters = (
  state = defaultState,
  action: IReduxAction<string | number>
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
