import { useEffect, useRef } from "react";

import { homeIngredientsData } from "utils/HomeData";


import { IngredientsThumb, ShapeOne, ShapeTwo } from "utils/homeImages";
import Button from "@material-ui/core/Button";

import "./styles.scss";

export default function HomeIngredients() {





  return (
    <section
   
      className="home-ingredients"
    >
      <div
        className="home-ingredients__thumb"
        style={{ backgroundImage: `url(${IngredientsThumb})` }}
      >
        <div className="home-ingredients__cards-left">
          {homeIngredientsData.leftData.map(
            ({ title, content, order }, index) => (
              <div
               
                className="home-ingredients__card-wrapper"
                key={`${title}-${index}`}
              >
                <div className="home-ingredients__card">
                  <h3 className="home-ingredients__card-title">{title}</h3>
                  <p className="home-ingredients__card-content">{content}</p>
                  <span>{order}</span>
                </div>
              </div>
            )
          )}
        </div>
        <div className="home-ingredients__cards-right">
          {homeIngredientsData.rightData.map(
            ({ title, content, order }, index) => (
              <div
               
                className="home-ingredients__card-wrapper"
                key={`${title}-${index}`}
              >
                <div key={index} className="home-ingredients__card">
                  <h3 className="home-ingredients__card-title">{title}</h3>
                  <p className="home-ingredients__card-content">{content}</p>
                  <span>{order}</span>
                </div>
              </div>
            )
          )}
        </div>
        <span
          className="home-ingredients__shape-st"
          style={{ backgroundImage: `url(${ShapeOne})` }}
        ></span>
        <span
          className="home-ingredients__shape-nd"
          style={{ backgroundImage: `url(${ShapeTwo})` }}
        ></span>
      </div>

      <div
        
        className="home-ingredients__content"
      >
        <div  className="primary-yellow-text">
          Best food
        </div>

        <h2  className="primary-heading-text">
          Super delicious Steak <strong>Hamburger</strong>
        </h2>

        <h2  className="home-ingredients__price">
          <strong>$20.00</strong>
        </h2>

        <div>
          <Button subClass="red" page="shop">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}


