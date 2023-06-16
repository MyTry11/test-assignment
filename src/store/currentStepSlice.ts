import { createSlice } from "@reduxjs/toolkit";

interface IState {
  value: number;
}

const initialState: IState = {
  value: 0,
};

export const currentStepSlice = createSlice({
  name: "currentStepR",
  initialState,
  reducers: {
    increaseStep: (state) => {
      state.value = +state.value + 1;
    },
    decreaseStep: (state) => {
      state.value = +state.value - 1;
    },
  },
});

export const { increaseStep, decreaseStep } = currentStepSlice.actions;

export default currentStepSlice.reducer;
