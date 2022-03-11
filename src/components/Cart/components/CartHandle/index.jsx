import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import { useSelector } from "react-redux";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { AuthContexts } from "contexts/AuthContext";

export default function CartHandle(props) {
  const cartReducer = useSelector((state) => state?.CartReducer);
  const history = useHistory();
  const { loginWithRedirect, isAuthenticated } = AuthContexts();
  const [isActive, setIsActive] = useState(false);

  const {handleCloseCart} =props
  const toggleDropUp = () => {
    setIsActive(!isActive);
  };

  const handleCheckout = (isAuthenticated) => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      history.push("/checkout");
      handleCloseCart()
    }
  };

  const handleBuyMore = ()=> {
    handleCloseCart()
    history.push(`/shop/our-foods?_limit=16&_page=1`)
  }

  return (
    <div className="cart-handle">
      <div onClick={toggleDropUp} className="cart-handle__dropup"></div>

      <div
        className={
          isActive ? "cart-handle__detail active" : "cart-handle__detail"
        }
      >
        <h3 className="cart-handle__detail-title">Order Info</h3>
        <div className="cart-handle__row">
          <span className="cart-handle__label">Discount</span>
          <span className="cart-handle__content">$20</span>
        </div>
        <div className="cart-handle__row">
          <span className="cart-handle__label">Shipping Cost</span>
          <span className="cart-handle__content">Free</span>
        </div>
        <div className="cart-handle__row">
          <span className="cart-handle__label">Voucher</span>
          <span className="cart-handle__content">None</span>
        </div>
      </div>

      <div className="cart-handle__total">
        <span className="cart-handle__txt">Total</span>
        <span className="cart-handle__price">
          ${cartReducer?.cart.length < 1 ? 0 : cartReducer?.totalPrice}
        </span>
      </div>

      <div className="cart-handle__btns">
        <PrimaryButton
          page="checkout"
          subClass="red cart-handle__btn"
          className="cart-handle__btn cart-handle__btn--checkout"
         
        >
          <ShoppingCartIcon />
          <span onClick={() => {
            handleCheckout(isAuthenticated);
          }}>Checkout</span>
        </PrimaryButton>
        <PrimaryButton page="shop" subClass="cart-handle__btn">
          <StoreMallDirectoryIcon />
          <span onClick={()=> {handleBuyMore()}}>Buy more</span>
        </PrimaryButton>
      </div>
    </div>
  );
}

