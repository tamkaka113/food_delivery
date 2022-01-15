import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { MOBILE_BREAKPOINT } from "constants/breakpoints";



// react img magnifiers


import "./styles.scss";

function DetailImage(props) {
  const { selectedProduct } = props;
  const { img } = selectedProduct ? selectedProduct : "";

  const [isAtDesktop, setIsAtDesktop] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const handleResizeWindow = () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      setIsAtDesktop(true);
    } else {
      setIsAtDesktop(false);
    }
  };

  window.addEventListener("resize", handleResizeWindow);

  // reset img when window is resized
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return window.removeEventListener("resize", handleResizeWindow);
  }, []);



  return (
    <div className="detail-img">
      {isAtDesktop ? 
        (
          <div className={isLast ? "detail-img__main last" : "detail-img__main"}>
          <img className="detail-img__main-mobile" src={img} alt="Foods" />
        </div>
        
        )
     : (
        <div className={isLast ? "detail-img__main last" : "detail-img__main"}>
          <img className="detail-img__main-mobile" src={img} alt="Foods" />
        </div>
      ) 
      }

      <div className="detail-img__slides">
        {img ? (
          <>
            <div
              onClick={() => setIsLast(false)}
              className={
                isLast ? "detail-img__slide last" : "detail-img__slide"
              }
            >
              <img src={img} alt="Slide" />
            </div>
            <div
              onClick={() => setIsLast(true)}
              className={
                isLast ? "detail-img__slide" : "detail-img__slide last"
              }
            >
              <img src={img} alt="Slide" />
            </div>
          </>
        ) : (
          <>
           
          </>
        )}
      </div>
    </div>
  );
}

DetailImage.propsTypes = {
  product: PropTypes.object,
};

export default DetailImage;
