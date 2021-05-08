import { IPizzaInCart, IReduxAction } from "../../types";

const initialState: any = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action: IReduxAction<IPizzaInCart>) => {
  switch (action.type) {
    case "UPDATE:CART:ITEMS":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id]
            ? { [action.payload.dough]: [action.payload] }
            : {
                ...state.items[action.payload.id],
                [action.payload.dough]: !state.items[action.payload.id][
                  action.payload.dough
                ]
                  ? [action.payload]
                  : [
                      ...state.items[action.payload.id][action.payload.dough],
                      action.payload,
                    ],
              },
        },
        totalCount: 322,
        totalPrice: 322,
      };
    default:
      return state;
  }
};

export default cart;

//!state.items[action.payload.id][action.payload.dough] ? [action.payload] : [...state.items[action.payload.id][action.payload.dough], action.payload]
