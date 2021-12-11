
import { useState } from "react";
import ShopProducts from "./ShopProducts";

import ShopHandle from "./ShopHandle";


import "./styles.scss";

function ShopContent() {
  const [isFlex, setIsFlex] = useState(false);


  return (
    <div className="shop-content">
      <ShopHandle isFlex={isFlex} setIsFlex={setIsFlex} />
       <ShopProducts/>
    </div>
  );
}

export default ShopContent;
