import React from "react";

import { Button } from "@material-ui/core";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import RadioOutlinedIcon from "@material-ui/icons/RadioOutlined";
import "./styles.scss";

export default function Wishlist(props) {
  const { openWishList, setOpenWishList } = props;

  const closeWishList = () => {
    setOpenWishList(false);
  };

  return (
    <div className={openWishList ? "wishlist active" : "wishlist"}>
      <div className="wishlist__top">
        <div className="wishlist__shop">
          <RadioOutlinedIcon />
          <span>Your wishlist</span>
        </div>

        <Button onClick={closeWishList}>
          <ExitToAppOutlinedIcon />
        </Button>
      </div>

      <div className="wishlist__items">
        <div className="wishlist__item">
          <div className="wishlist__img">
            <img src="" alt="Wishlist" />
          </div>
          <div className="wishlist__content">
            <span className="wishlist__name">tam</span>
            <p className="wishlist__description">tam</p>
            <span className="wishlist__price">$20</span>
          </div>

          <Button className="wishlist__rm">
            <DeleteOutlineIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
