import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IInputs {
  phone: string;
  email: string;
  nickName: string;
  name: string;
  surName: string;
  advantages: string[];
  about: string;
}

interface IState {
  value: IInputs;
}

const initialState: IState = {
  value: {
    phone: "+7 999 162 73 57",
    email: "valiev.arslan.k@gmail.com",
    nickName: "",
    name: "",
    surName: "",
    advantages: ["", "", ""],
    about: "",
  },
};

export const dataSlice = createSlice({
  name: "dataR",
  initialState,
  reducers: {
    setDataR: (state, action) => {
      state.value = { ...state.value, ...action.payload };
      console.log(state.value);
    },
  },
});

export const { setDataR } = dataSlice.actions;

export default dataSlice.reducer;
