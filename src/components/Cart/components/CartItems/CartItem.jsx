import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./CartItem.scss";
import { formatPrice } from "utils/helper";
import { REMOVE_PRODUCT,INCREMENT_PRODUCT, DECREMENT_PRODUCT, TOTAL_PRODUCT } from "store/types";
export default function CartItem({ product }) {
  const { name, price, img, quantity } = product;
  const dispatch = useDispatch();
  const CartProduct = useSelector((state) => state?.CartReducer?.cart);
  const handleRemoveProduct = (product) => {
    dispatch({ type: REMOVE_PRODUCT, payload: product });
  };

  const handleIncreaseProduct = (product) => {
    dispatch({ type: INCREMENT_PRODUCT, payload: product });
  };

  useEffect(() => {
    dispatch({ type: TOTAL_PRODUCT});
  }, [quantity, CartProduct.length,dispatch]);

  const handleDecreaseProduct = (product) => {
    dispatch({ type: DECREMENT_PRODUCT, payload: product });
  };
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={img} alt="Cart product" />
      </div>

      <div className="cart-item__content">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">{formatPrice(price)}</div>
        <div className="cart-item__handle">
          <Button
            onClick={() => {
              handleDecreaseProduct(product);
            }}
          >
            <RemoveIcon />
          </Button>
          <span className="cart-item__qnt">{quantity}</span>
          <Button
            onClick={() => {
              handleIncreaseProduct(product);
            }}
          >
            <AddIcon />
          </Button>
        </div>
      </div>

      <Button
        className="cart-item__remove"
        onClick={() => handleRemoveProduct(product)}
      >
        <DeleteOutlineIcon />
      </Button>
    </div>
  );
}
