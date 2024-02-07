import { ActionTypes } from "../contents/action-type";

const initialState = {
  products: [],
};

export const productReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const SelectedReduser = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const BuyReduser = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.BUY:
      return { ...state, payload };
    case ActionTypes.BUYADD:
      return { ...state, payload };
    case ActionTypes.BUYDE:
      return { ...state, payload };
    default:
      return state;
  }
};
