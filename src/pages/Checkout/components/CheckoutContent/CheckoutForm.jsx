
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ToastContainer, toast } from "react-toastify";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import CheckoutFormField from "./CheckoutFormField";
import "./CheckoutForm.scss";

export default function CheckoutForm() {
  const history = useHistory();
  const notify = () =>
    toast.success("🦄 Your purchase is successful !", {
      autoClose: 2000,
    });

  const { register, handleSubmit } = useForm();

  const onHandleSubmit = (data) => {
    console.log(data);

    notify();

    setTimeout(() => {
      history.push("/shop/our-foods?_limit=16&_page=1");
    }, 2500);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onHandleSubmit)} className="checkout-form">
        <h2 className="checkout-form__title">Shipping address</h2>
        <div className="checkout-form__fields">
          <div className="checkout-form__row">
            <input
              className="checkout-form-field__input"
              label="First name"
              placeholder="First Name"
              type="text"
              {...register("firstName", { required: true, maxLength: 70 })}
              name="firstName"
            />
            <input
              className="checkout-form-field__input"
              label="Last name"
              placeholder="Last Name"
              type="text"
              {...register("lastName", { required: true, maxLength: 70 })}
              name="lastName"
            />
          </div>
          <input
            className="checkout-form-field__input"
            label="Address"
            placeholder="Address"
            type="text"
            {...register("address", { required: true, maxLength: 70 })}
            name="address"
          />
          <div className="checkout-form__row">
            <input
              className="checkout-form-field__input"
              label="Phone"
              placeholder="Phone"
              type="number"
              {...register("phone", { required: true, maxLength: 70 })}
              name="phone"
            />
          </div>
        </div>

        <div className="checkout-form__bottom">
          <div
            className="checkout-form__return"
            onClick={() => history.push("/shop/our-foods?_limit=16&_page=1")}
          >
            <ChevronLeftIcon />
            <span onClick={() => history.goBack()}>Return to shop</span>
          </div>
          <button type="submit">
            <PrimaryButton subClass="red">Checkout</PrimaryButton>
          </button>
        </div>
      </form>
    </>
  );
}
