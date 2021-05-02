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
