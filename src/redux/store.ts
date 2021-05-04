import * as Redux from "redux";
import ReduxThunk from "redux-thunk";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";

const rootReducer = Redux.combineReducers({ filters, pizzas, cart });

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk));

export default store;
