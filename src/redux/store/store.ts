import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../slice/inputSlice";
import ipSlice from "../slice/IpGeolocationSlice";

export const store = configureStore({
  reducer: {
    inputReducer: inputSlice,
    ipReducer: ipSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
