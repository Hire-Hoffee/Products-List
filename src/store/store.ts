import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import utilsReducer from "./utilsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    utils: utilsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
