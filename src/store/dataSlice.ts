import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { original } from "@reduxjs/toolkit";

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
  advantages: { [key: string]: string }[];
  about: string;
  sex: Sex;
  checkbox: { value: boolean; id: number; name: string }[];
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
    advantages: [
      { name: "ad1", value: "" },
      { name: "ad2", value: "" },
      { name: "ad3", value: "" },
    ],
    about: "",
    sex: Sex.default,
    checkbox: [
      { value: false, id: 1, name: "checkbox1" },
      { value: false, id: 2, name: "checkbox2" },
      { value: false, id: 3, name: "checkbox3" },
    ],
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
    setAdvantages: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.value.advantages.map((ad) => {
        if (ad.name === name) {
          ad.value = value;
          return ad;
        }
        return ad;
      });
    },

    removeAdvantage: (state, action) => {
      const copy = [...state.value.advantages].filter(
        (field) => field.name !== action.payload
      );
      state.value.advantages = copy;
    },
    addAdvantage: (state) => {
      const advs = state.value.advantages;
      const copy = [...advs];
      const last = advs[advs.length - 1];
      if (advs.length) {
        copy.push({ name: `ad${Number(last.name[2]) + 1}`, value: "" });
      } else {
        copy.push({ name: `ad1`, value: "" });
      }
      state.value.advantages = copy;
    },
    changeCheckboxValue: (state, action) => {
      state.value.checkbox.forEach((el) => {
        if (el.name === action.payload) {
          el.value = !el.value;

          console.log(original(state.value.checkbox));
        }
      });
    },
  },
});

export const {
  setData,
  setAdvantages,
  removeAdvantage,
  addAdvantage,
  changeCheckboxValue,
} = dataSlice.actions;

export default dataSlice.reducer;
