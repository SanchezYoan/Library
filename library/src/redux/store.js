import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerCourses from "./reducers/reducerCourses";
import reducerCart from "./reducers/reducerCart";
import reducerPayment from "./reducers/reducerPayment";

const rootReducer = combineReducers({
  books: reducerBooks,
  cart: reducerCart,
  author: reducerAuthor
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
