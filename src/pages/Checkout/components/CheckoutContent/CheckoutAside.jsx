import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import "./CheckoutAside.scss";
import { useSelector } from "react-redux";
import {formatPrice} from 'utils/helper'
export default function CheckoutAside() {
  const {cart, totalPrice} = useSelector((state) => state?.CartReducer);

  return (
    <aside>
      {cart?.map(({ quantity, name, country, price, img }) => {
        return (
          <ul className="checkout-products">
            <li className="checkout-product">
              <div className="checkout-product__img">
                <img src={img} alt="Checkout product" />
                <span className="checkout-product__qnt">{quantity}</span>
              </div>
              <div className="checkout-product__content">
                <h3 className="checkout-product__name">{name}</h3>
                <span className="checkout-product__country">{country}</span>
              </div>
              <span className="checkout-product__price">{formatPrice(price)}</span>
            </li>
          </ul>
        );
      })}

      <div className="checkout-discount">
        <input
          type="text"
          className="checkout-discount__input"
          placeholder="Gift card or discount code"
        />
        <PrimaryButton subClass="red">Apply</PrimaryButton>
      </div>

      <div className="checkout-detail">
        <div className="checkout-detail__row">
          <span className="checkout-detail__label">Discount</span>
          <span className="checkout-detail__content">0</span>
        </div>
        <div className="checkout-detail__row">
          <span className="checkout-detail__label">Shipping Cost</span>
          <span className="checkout-detail__content">Free</span>
        </div>
        <div className="checkout-detail__row">
          <span className="checkout-detail__label">Taxes (10%)</span>
          <span className="checkout-detail__content">${(totalPrice*10)/100}</span>
        </div>
      </div>

      <div className="checkout-total">
        <span className="checkout-total__label">Total</span>
        <span className="checkout-total__price">{formatPrice(totalPrice+(totalPrice*10)/100)}</span>
      </div>
    </aside>
  );
}
