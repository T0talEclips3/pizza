export interface IMenuItem {
  id: number;
  imageUrl: string;
  name: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
}

export interface IPizzaObject {
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

export interface ICartState {
  items: {
    [itemId: string]: {
      pizza: IPizzaObject;
      count: number;
    };
  };
  totalPrice: number;
  totalCount: number;
}

export interface IFiletersState {
  category: number | null;
  sorting: { name: string; type: string };
}

export interface IMenuState {
  menuItems: IMenuItem[];
  isLoaded: boolean;
}
export interface IRootState {
  filters: IFiletersState;
  cart: ICartState;
  menu: IMenuState;
}
