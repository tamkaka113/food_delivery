import * as types from "../types";

export const getProductListStartAction = () => ({
  type: types?.GET_PRODUCT_LIST_START,
});
export const getProductListSuccessAction = (payload) => ({
  type: types?.GET_PRODUCT_LIST_SUCCESS,
  payload,
});
export const getProductListErrorAction = (error) => ({
  type: types?.GET_PRODUCT_LIST_ERROR,
  error,
});
