import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const buyingSlice = createSlice({
  name: "buying",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.totalPrice = action.payload.toFixed(2);
    },
    subtractProduct: (state, action) => {
      state.totalPrice = action.payload.toFixed(2);
    },
  },
});

export const { buyProduct, addProduct, subtractProduct } = buyingSlice.actions;

export default buyingSlice.reducer;
