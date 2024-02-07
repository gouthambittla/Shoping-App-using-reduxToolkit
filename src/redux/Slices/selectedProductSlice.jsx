import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedProduct } = selectedProductSlice.actions;

export default selectedProductSlice.reducer;
