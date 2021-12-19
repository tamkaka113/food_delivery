import React, { useEffect, useState } from "react";


import HomeBanner from "./HomeBanner";

import "./styles.scss";
import { homeBannersData } from "utils/HomeData";

export default function Banners() {
  const [slideNum, setSlideNum] = useState(0);
 



  let timeWaiter
 
  useEffect(() => {

    timeWaiter = setInterval(() => {
      if (slideNum < homeBannersData.length - 1) {
        setSlideNum(slideNum + 1);
      } else {
        setSlideNum(0);
      }
    }, 2500);
    return () => clearInterval(timeWaiter)
    
  }, [slideNum])

  
      
const handleStopAutoPlay =() => {
  
}

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
          <HomeBanner key={index} {...data}
          handleStopAutoPlay = {handleStopAutoPlay}
       
          />
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
