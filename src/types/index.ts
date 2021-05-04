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

export interface IReduxAction<T> {
  type: string;
  payload?: T;
}

export interface IRootState {
  pizzas: { pizzaObjects: IPizza[]; isLoaded: boolean };
  filters: { category: number | null; sortBy: string };
  cart: { items: []; totalPrice: number; totalCount: number };
}
