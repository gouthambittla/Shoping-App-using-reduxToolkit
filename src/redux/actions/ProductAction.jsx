import { ActionTypes } from "../contents/action-type";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const BuyProducts = (product) => {
  return {
    type: ActionTypes.BUY,
    payload: product,
  };
};

export const ADDProducts = (product) => {
  return {
    type: ActionTypes.BUYADD,
    payload: product.toFixed(2),
  };
};

export const SUBProducts = (updatedprice) => {
  return {
    type: ActionTypes.BUYDE,
    payload: updatedprice.toFixed(2),
  };
};
