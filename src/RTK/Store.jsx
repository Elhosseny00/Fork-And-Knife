import { configureStore } from "@reduxjs/toolkit";
import popularProducts, { fetchPopularProduct } from "./Slices/ProductSlice";
import cartSlice from "./Slices/CartSlice";
export const store = configureStore({
  reducer: {
    products: popularProducts,
    cart: cartSlice,
  },
});
store.dispatch(fetchPopularProduct());
