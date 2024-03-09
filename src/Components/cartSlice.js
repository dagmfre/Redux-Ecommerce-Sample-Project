import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state, action) => {
      state.products = [];
    },
    increment: (state) => {
      state.total++;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increment } = cartSlice.actions;

export default cartSlice.reducer;
