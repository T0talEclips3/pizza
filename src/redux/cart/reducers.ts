import { ICartState, IPizzaInCart, IReduxAction } from "../../types";

const initialState: ICartState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action: IReduxAction<IPizzaInCart>) => {
  switch (action.type) {
    case "cart/addOne":
      const itemId =
        action.payload.id +
        "" +
        action.payload.dough +
        "" +
        action.payload.pizzaSize;

      const items = {
        ...state.items,
        [itemId]: !state.items[itemId]
          ? { pizza: action.payload, count: 1 }
          : { ...state.items[itemId], count: ++state.items[itemId].count },
      };

      return {
        ...state,
        items: { ...items },
        totalCount: ++state.totalCount,
        totalPrice: state.totalPrice + items[itemId].pizza.price,
      };
    case "cart/deleteOne":
      const specId =
        action.payload.id +
        "" +
        action.payload.dough +
        "" +
        action.payload.pizzaSize;

      const itemss = {
        ...state.items,
        [specId]: {
          ...state.items[specId],
          count: --state.items[specId].count,
        },
      };

      if (itemss[specId].count === 0) {
        const price = itemss[specId].pizza.price;
        delete itemss[specId];
        return {
          ...state,
          items: { ...itemss },
          totalCount: --state.totalCount,
          totalPrice: state.totalPrice - price,
        };
      }

      return {
        ...state,
        items: { ...itemss },
        totalCount: --state.totalCount,
        totalPrice: state.totalPrice - itemss[specId].pizza.price,
      };
    case "cart/wipeAll":
      return { items: {}, totalCount: 0, totalPrice: 0 };
    case "cart/deleteEntry":
      const newId =
        action.payload.id +
        "" +
        action.payload.dough +
        "" +
        action.payload.pizzaSize;

      const stateToUpdate = {
        ...state,
        items: {
          ...state.items,
        },
      };
      const numberToDel = stateToUpdate.items[newId].count;
      const priceToDel = numberToDel * stateToUpdate.items[newId].pizza.price;
      delete stateToUpdate.items[newId];

      return {
        ...stateToUpdate,
        totalCount: state.totalCount - numberToDel,
        totalPrice: state.totalPrice - priceToDel,
      };
    default:
      return state;
  }
};

export default cart;
