

import "./CheckoutFormField.scss";

export default  function CheckoutFormField(props) {
 const {label} =props

  return (
    <div className="checkout-form-field">
      <div className="checkout-form-field__wrapper">
        <input
          className="checkout-form-field__input"
          placeholder={label}
          type="text"
        
        />
        <span className="checkout-form-field__label"></span>
      </div>
      <span className="checkout-form-field__error">
       
      </span>
    </div>
  );
}




