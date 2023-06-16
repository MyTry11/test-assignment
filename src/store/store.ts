import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import currentStepSlice from "./currentStepSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    currentStepR: currentStepSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
