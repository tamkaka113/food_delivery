import React from "react";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import CommonBannerImg from "assets/images/Common/banner.jpg";
import "./styles.scss";

export default function Banner() {
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
