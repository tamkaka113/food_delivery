import * as types from "../types";
import axios from "axios";
import queryString from 'query-string'
import shopApi from "apis/shopApi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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


