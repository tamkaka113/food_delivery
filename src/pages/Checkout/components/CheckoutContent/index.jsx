
import CheckoutForm from "./CheckoutForm";
import CheckoutAside from "./CheckoutAside";
import "./styles.scss";

export default function CheckoutContent() {
  return (
    <div className="checkout-content">
    
      <div
        className="checkout-content__right"
        style={{ paddingTop: "60px" }}
      >
        <CheckoutAside />
    
      </div>
      <div className="checkout-content__left"> 
        <CheckoutForm 
        />
      </div>
    </div>
  );
}

