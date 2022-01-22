import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItems from "./components/CartItems";
import CartHandle from "./components/CartHandle";

import { FilterContext } from "contexts/FilterContext";
import EmptyCartImg from "assets/svgs/Common/empty-cart.svg";
import "./styles.scss";
export default function Cart() {
  const CartProduct = useSelector((state) => state?.CartReducer?.cart);

  const { isDisplay, setIsDisplay } = useContext(FilterContext);

  const handleCloseCart = () => {
    setIsDisplay({
      ...isDisplay,
      isDisplayCart: false,
    });
  };

  return (
    <div className={!isDisplay.isDisplayCart ? "cart" : "cart active"}>
      <div onClick={handleCloseCart} className="cart__overlay"></div>
      <div className="cart__container">
        <div className="cart__heading">
          <h2 className="cart__title">Shopping Cart</h2>
          <div
            onClick={handleCloseCart}
            className={
              isDisplay.isDisplayCart ? " cart__close" : " cart__close active"
            }
          ></div>
        </div>

        {CartProduct.length > 0 ? (
          <CartItems />
        ) : (
          <img src={EmptyCartImg} alt="" />
        )}
        <CartHandle />
      </div>
    </div>
  );
}
