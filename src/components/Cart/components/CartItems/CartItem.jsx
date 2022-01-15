import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// material ui core
import { Button } from "@material-ui/core";

// material ui icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./CartItem.scss";

export default function CartItem({ product }) {
  const { name, price, img, quantity } = product;
  const dispatch = useDispatch();

  const CartProduct = useSelector((state) => state?.CartReducer?.cart);

  const handleRemoveProduct = (product) => {
    dispatch({ type: "remove/product", payload: product });
  };

  const handleIncreaseProduct = (product) => {
    dispatch({ type: "increment/product", payload: product });
  };

  useEffect(() => {
    dispatch({ type: "total/product" });
  }, [quantity, CartProduct.length]);

  const handleDecreaseProduct = (product) => {
    dispatch({ type: "decrement/product", payload: product });
  };
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={img} alt="Cart product" />
      </div>

      <div className="cart-item__content">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">${price}</div>
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
