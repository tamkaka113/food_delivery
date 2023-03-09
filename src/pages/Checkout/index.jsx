import CheckoutBanner from "./components/CheckoutBanner";
import CheckoutContent from "./components/CheckoutContent";
import "./Checkout.scss";
import CheckoutLogin from "./components/CheckoutLogin";
import { AuthContexts } from "contexts/AuthContext";

function Checkout() {
  const { myUser } = AuthContexts();
  return (
    <div className="checkout">
      <CheckoutBanner />
      {myUser ? <CheckoutContent /> : <CheckoutLogin />}
    </div>
  );
}

export default Checkout;
