import React from "react";
import PropTypes from "prop-types";

// material ui core
import { Button } from "@material-ui/core";

// material ui icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


import "./CartItem.scss";

function CartItem() {


 

  return (
    <div className="cart-item">
  {/*     <div className="cart-item__img">
        <img src={img} alt="Cart product" />
      </div> */}

      <div className="cart-item__content">
        <div className="cart-item__name">pizza</div>
        <div className="cart-item__price">$20</div>
        <div className="cart-item__handle">
          <Button >
            <RemoveIcon />
          </Button>
          <span className="cart-item__qnt">5</span>
          <Button >
            <AddIcon />
          </Button>
        </div>
      </div>

      <Button
               className="cart-item__rm"
      >
        <DeleteOutlineIcon />
      </Button>
    </div>
  );
}

CartItem.propTypes = {
  cartProducts: PropTypes.object,
  handleAddToFirestore: PropTypes.func.isRequired,
  handleRemoveFromFirestore: PropTypes.func.isRequired,
};

export default CartItem;
