import React, { useEffect, useState } from "react";


import HomeBanner from "./HomeBanner";

import "./styles.scss";
import { homeBannersData } from "../BannerInfo";

export default function Banners() {
  const [slideNum, setSlideNum] = useState(0);
 


  // handle auto slide
  useEffect(() => {
    const timeWaiter = setTimeout(() => {
      if (slideNum < homeBannersData.length - 1) {
        setSlideNum(slideNum + 1);
      } else {
        setSlideNum(0);
      }
    }, 100);

    return clearTimeout(timeWaiter);
  },[]);



  const moveDot = (idx) => {
    setSlideNum(idx);
  };

  return (
    <section className="home-banners">
      <div
        className="slides"
        style={{ transform: `translateX(${-100 * slideNum}%)` }}
      >
        {homeBannersData.map((data, index) => (
          <HomeBanner key={index} {...data} />
        ))}
      </div>
      <div className="dots">
        {Array(homeBannersData.length)
          .fill()
          .map((_, index) => {
            return (
              <span
                onClick={() => moveDot(index)}
                key={index}
                className={slideNum === index ? "dot active" : "dot"}
              ></span>
            );
          })}
      </div>
    </section>
  );
}
