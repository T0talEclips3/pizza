import * as Redux from "redux";
import ReduxThunk from "redux-thunk";
import filters from "./filters";
import menu from "./menu";
import cart from "./cart";

const rootReducer = Redux.combineReducers({ filters, menu, cart });

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk));

export default store;
