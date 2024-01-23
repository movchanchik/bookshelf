import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import popupSlice from "./popupSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      book: bookReducer,
      popup: popupSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
