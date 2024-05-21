import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerBooks from "../redux/reducers/reducerBooks";
import reducerDisplay from "../redux/reducers/reducerDisplay";

const rootReducer = combineReducers({
  books: reducerBooks,
  display: reducerDisplay,
  // cart: reducerCart,
  // author: reducerAuthor
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
