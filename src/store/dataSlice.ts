import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export enum Sex {
  default = "Не выбрано",
  man = "man",
  woman = "woman",
}
export interface IInputs {
  phone: string;
  email: string;
  nickName: string;
  name: string;
  surName: string;
  advantages: string[];
  about: string;
  sex: Sex;
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
    advantages: ["ad1", "ad2", "ad3"],
    about: "",
    sex: Sex.default,
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = { ...state.value, ...action.payload };
      console.log(state.value);
    },
    removeAdvantage: (state, action) => {},
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
