import { useEffect, useRef } from "react";

import { homeReviewsData } from "utils/HomeData";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

// material ui core
import { Container } from "@material-ui/core";

// swiper js

// swiper scss
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";


import "./styles.scss";

// swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default function HomeReviews() {
  let containerRef = useRef(null);

  

  return (
    <section className="home-reviews">
      <Container >
        <Swiper
          speed={500}
          spaceBetween={20}
          loop
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
        >
          {homeReviewsData.map(({ img, name, role, comment }, index) => (
            <SwiperSlide key={index}>
              <div className="home-reviews__content">
                <div className="home-reviews__img-wrapper">
                  <img
                    src={img}
                    alt="user-review"
                    className="home-reviews__img"
                  ></img>
                </div>
                <div className="home-reviews__name">{name}</div>
                <div className="home-reviews__role">{role}</div>
                <p className="home-reviews__comment">{comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

    </section>
  );
}

