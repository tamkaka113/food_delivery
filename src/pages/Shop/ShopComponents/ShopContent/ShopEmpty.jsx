

import EmptyShopImg from "assets/svgs/Shop/empty-shop.svg";

import "./ShopEmpty.scss";

function ShopEmpty() {
  return (
    <div className="shop-empty">
      <img src={EmptyShopImg} alt="Empty shop" />
      <h2 className="shop-empty__title">
        There are no available products
      </h2>
    </div>
  );
}

export default ShopEmpty;
