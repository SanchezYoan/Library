import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerCart from "./reducers/reducerCart";

const rootReducer = combineReducers({
  books: reducerBooks,
  cart: reducerCart,
  author: reducerAuthor
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
