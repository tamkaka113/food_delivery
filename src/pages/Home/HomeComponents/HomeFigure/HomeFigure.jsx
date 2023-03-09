import { useState } from "react";
import { Figure } from "utils/homeImages";
import "./styles.scss";
export default function HomeFigure() {
  const [isShow, setIsShow] = useState(false);
  const toggleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <section
      className="home-analysis"
      style={{ backgroundImage: `url(${Figure})` }}
    >
      <div className="home-analysis__wrapper">
        <div className="home-analysis__content">
          <div className="home-analysis__content-text">
            <span className="home-analysis__content-name">Burger</span>
            <span className="home-analysis__content-price">$25</span>
          </div>
          <div onClick={toggleModal} className="home-analysis__btn">
            <div className="triangle"></div>
          </div>
          <span className="gooey"></span>
          <span className="gooey"></span>
          <span className="gooey"></span>
        </div>
        <div
          className={
            isShow
              ? "home-analysis__video-container show"
              : "home-analysis__video-container"
          }
        >
          <span onClick={toggleModal} className="home-analysis__modal"></span>

          <iframe
            width="560"
            height="315"
            className={
              isShow ? "home-analysis__video show" : "home-analysis__video"
            }
            src="https://www.youtube.com/embed/dA0VGEbbw4g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
           picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
