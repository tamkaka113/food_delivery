// material ui core
import { Container } from "@material-ui/core";

import PrimaryButton from "components/PrimaryButton/PrimaryButton";

import CheckoutLoginSvg from "assets/svgs/Checkout/login.svg";
import "./styles.scss";
import {AuthContexts} from 'contexts/AuthContext'

function CheckoutLogin() {
  const {loginWithRedirect} =AuthContexts()
  const handleLogin = async () => {
   await loginWithRedirect({ redirect_uri: `http://localhost:3000}`})
     
  }
  return (
    <Container>
      <div className="checkout-login">
        <div className="primary-yellow-text">Join with us!!</div>
        <h2 className="primary-heading-text">
          You are not logged in. Please log in and try again!
        </h2>
        <div  onClick ={handleLogin}>

        <PrimaryButton page="login" subClass="red" >
          Login now
        </PrimaryButton>

        </div>
        <img
          className="checkout-login__img"
          src={CheckoutLoginSvg}
          alt="Login"
        />
      </div>
    </Container>
  );
}

export default CheckoutLogin;
