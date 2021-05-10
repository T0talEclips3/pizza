export interface IPizza {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
}

export interface IPizzaInCart {
  id: number;
  imageUrl: string;
  name: string;
  dough: number;
  pizzaSize: number;
  price: number;
}

export interface IReduxAction<T> {
  type: string;
  payload: T;
}

export interface IRootState {
  filters: { category: number | null; sortBy: { name: string; type: string } };
  cart: ICartState;
    menu: { pizzaObjects: IPizza[]; isLoaded: boolean };
}

export interface ICartState {
  items: {
    [itemId: string]: {
      pizza: IPizzaInCart;
      count: number;
    };
  };
  totalPrice: number;
  totalCount: number;
}
