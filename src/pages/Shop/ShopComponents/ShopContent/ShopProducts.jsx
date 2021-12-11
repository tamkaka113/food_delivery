import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// material ui icons
import CircularProgress from "@material-ui/core/CircularProgress";

import ShopProduct from "components/ShopProduct/ShopProduct";

import "./ShopProducts.scss";

export default function ShopProducts() {
  const state = useSelector((state) => state.ProductReducer);

  console.log(state.list);

  return (
    <>
      <div className="shop-products">
        {state.list?.map((item) => (
          <ShopProduct key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
