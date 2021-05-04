import { IReduxAction } from "../../types";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action: IReduxAction<any>) => {
  switch (action.type) {
    case "SET:TOTALCOUNT":
      return { ...state, totalItemCount: action.payload };
    case "SET:TOTALPRICE":
      return { ...state, totalItemPrice: action.payload };
    case "UPDATE:CART:ITEMS":
      return {
        ...state,
        items: {
          ...state.items,
          
        },
      };
    default:
      return state;
  }
};

export default cart;
