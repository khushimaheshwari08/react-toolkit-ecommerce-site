import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "./reducer/cartSystem";

export const store = configureStore({
  reducer: {
    user: cartSystem,
  },
});
