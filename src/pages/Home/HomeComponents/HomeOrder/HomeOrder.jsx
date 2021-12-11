import { useEffect, useRef } from "react";



// material ui core
import { Button, Container } from "@material-ui/core";




import OrderSvg from "assets/svgs/Home/big-delivery.svg";
import OrderSvgSmall from "assets/svgs/Home/small-delivery.svg";


import "./styles.scss";

export default function HomeOrder() {
  

  return (
    <section className="home-delivery">
      <Container>
        <div className="home-delivery__container">
          <div className="home-delivery__col">
            <div
              
              className="primary-yellow-text"
            >
              Delivery
            </div>
            <h2
            
              className="primary-heading-text"
            >
              A Moments Of Delivered <strong>On Right Time & Place</strong>
            </h2>

            <p
         
              className="home-delivery__description"
            >
              Food G is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed frontage
              on two sides of the building, overlooking the market and a
              bustling London inteon.
            </p>

            <div
    
              className="home-delivery__contact"
            >
              <img
                src={OrderSvgSmall}
                className="home-delivery__contact-img"
                alt="Delivery"
              ></img>
              <div className="home-delivery__contact-col">
                <div className="home-delivery__contact-title">
                 Order Number
                </div>
                <div className="home-delivery__contact-phone">
                  <strong>0431 407 688</strong>
                </div>
              </div>
              <Button subClass="red" page="shop">
                Order Now
              </Button>
            </div>
          </div>
          <img
     
            src={OrderSvg}
            className="home-delivery__img"
            alt="Delivery"
          />
        </div>
      </Container>
    </section>
  );
}


