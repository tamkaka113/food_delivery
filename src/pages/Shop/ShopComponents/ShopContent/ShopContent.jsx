
import { useState } from "react";
import ShopProducts from "./ShopProducts";

import ShopHandle from "./ShopHandle";


import "./styles.scss";

export default function ShopContent() {
  const [isFlex, setIsFlex] = useState(false);


  return (
    <div className="shop-content grid">
      <ShopHandle isFlex={isFlex} setIsFlex={setIsFlex} />
       <ShopProducts/>
    </div>
  );
}
