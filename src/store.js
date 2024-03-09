import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Components/cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store
