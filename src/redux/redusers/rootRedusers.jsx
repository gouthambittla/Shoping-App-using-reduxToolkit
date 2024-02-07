import { combineReducers } from "redux";
import { productReduser } from "./productRedusers";
import { SelectedReduser } from "./productRedusers";
import { BuyReduser } from "./productRedusers";

const reducers = combineReducers({
  allProducts: productReduser,
  selectedProducts: SelectedReduser,
  BuyProduct:BuyReduser,
});

export default reducers;
