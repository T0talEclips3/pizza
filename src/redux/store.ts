import * as Redux from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";

const rootReducer = Redux.combineReducers({ filters, pizzas });

const store = Redux.createStore(rootReducer);

export default store;
