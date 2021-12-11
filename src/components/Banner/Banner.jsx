import React from "react";
import { useParams } from "react-router-dom";

// material ui icons
import LinearScaleIcon from "@material-ui/icons/LinearScale";



import CommonBannerImg from "assets/images/Common/banner.jpg";

import "./styles.scss";

function Banner() {



  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${CommonBannerImg})` }}
    >
      <h2 className="banner__title">Product</h2>
      <div className="banner__paths">
        <span className="banner__path">Home</span>
        <LinearScaleIcon />
        <span className="banner__path">Shop</span>
        <LinearScaleIcon />
        <span className="banner__path active">Product</span>
      </div>
    </section>
  );
}

export default Banner;
