import { createStore } from "redux";
import reducers from "./redusers/rootRedusers";

const store = createStore(reducers);

export default store;
