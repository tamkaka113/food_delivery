import { combineReducers } from "redux";
import ProductReducer from "store/reducer/ProductReducer";
import CartReducer from "store/reducer/CartReducer";
const rootReducer = combineReducers({
  ProductReducer: ProductReducer,
  CartReducer: CartReducer,
});
export default rootReducer;
