import { IPizzaInCart, IReduxAction, ICartState } from "../../types";

const initialState: ICartState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action: IReduxAction<IPizzaInCart>) => {
  switch (action.type) {
    case "UPDATE:CART:ITEMS":
      
    const objectItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const pizzaObjectArray = Array(0).concat.apply(
        [],
        Object.values(objectItems)
      );
        
      return {
        ...state,
        items: {
          ...objectItems,
        },
        totalCount: pizzaObjectArray.length,
        totalPrice: pizzaObjectArray.reduce((sum, obj) => obj.price + sum, 0),
      };
    default:
      return state;
  }
};

export default cart;
