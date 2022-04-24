import * as types from "../types";
const initState = {
  list: [],
  error: null,
  loading: false,
};

export default function ProductReducer(state = { ...initState }, action) {
  switch (action.type) {
    case types.GET_PRODUCT_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case types.GET_PRODUCT_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
