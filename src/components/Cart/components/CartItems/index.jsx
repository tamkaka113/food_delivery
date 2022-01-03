import { useContext } from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";

import "./styles.scss";

function CartItems() {
  return (
    <div className="cart-items">
  
        <CartItem />
   
    </div>
  );
}

export default CartItems;
