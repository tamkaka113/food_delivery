import React from "react";


// material ui icons
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// material ui core
import { Container,Button } from "@material-ui/core";

/* import PrimaryButton from "components/PrimaryButton"; */



import "./HomeBanner.scss";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";

export default function HomeBanner(props) {
  const { title, description, strong, background, handleStopAutoPlay } = props;


  return (
    <div
   
      className="home-banner"
      onMouseEnter = {()=> {handleStopAutoPlay()}}

      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Container className="container-ui">
        <div className="home-banner__container">
          <div  className="home-banner__title">
            {title}
          </div>
          <div
          
            className="home-banner__description"
          >
            {description}
            <strong>{strong}</strong>
          </div>

          <div>
            <PrimaryButton  >
              <AddShoppingCartIcon className="home-banner__icon" />
              Order now
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

