import * as types from "./types";

export const setPizzaCategory = (payload: number | null) => {
  return { type: types.SET_PIZZA_CATEGORY, payload: payload };
};

export const setSortingType = (payload: { name: string; type: string }) => {
  return { type: types.SET_SORTING_TYPE, payload: payload };
};
