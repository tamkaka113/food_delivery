import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./styles.scss";

export default function CartItems() {
  const cartProducts = useSelector((state) => state?.CartReducer?.cart);

  return (
    <div className="cart-items">
      {cartProducts?.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
}

