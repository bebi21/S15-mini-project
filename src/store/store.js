import { configureStore } from "@reduxjs/toolkit";
import cartTotal from "./cartTotal";


export const store = configureStore({
  reducer: {
    cart: cartTotal,
  },
});
