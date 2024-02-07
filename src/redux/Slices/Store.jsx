import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import selectedProductReducer from "./selectedProductSlice";
import buyingReducer from "./buyingSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    buying: buyingReducer,
  },
});

export default store;
