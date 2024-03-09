import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isLogged: false,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => ({
      ...state,
      value: state.value + 1,
    }),

    decrement: (state) => {
      return {
        ...state,
        value: state.value - 1,
      };
    },

    addByNumber: (state, action) => {
      return {
        ...state,
        value: state.value + action.payload,
      };
    },

    login: (state) => {
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    },
  },
});

export const { increment, decrement, addByNumber, login } =
  counterSlice.actions;
export default counterSlice.reducer;
