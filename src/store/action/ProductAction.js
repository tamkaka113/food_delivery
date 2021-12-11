import * as types from "../types";
import axios from "axios";

import shopApi from "apis/shopApi";
import { useDispatch } from "react-redux";
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
export const GetProductListAction = async (name,params) => {

       const data  = await shopApi.getAll(name,params)
          if(data) {
            return data
          }
    

}

