import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    auth: authReducer,
  },
});
