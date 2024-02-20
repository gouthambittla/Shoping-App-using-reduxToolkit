import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import selectedProductReducer from "./selectedProductSlice";
import buyingReducer from "./buyingSlice";
import UserDetailsReducer from "./userdetails";
const store = configureStore({
  reducer: {
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    buying: buyingReducer,
    userinfo: UserDetailsReducer,
  },
});

export default store;
