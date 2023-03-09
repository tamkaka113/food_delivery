import { homeProductsData } from "utils/HomeData";
import { Container } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import "swiper/components/pagination/pagination.scss";
import HomeProductDetail from "./HomeProductDetail";
import "swiper/swiper.scss";
import "./styles.scss";
// swiper modules
SwiperCore.use([Autoplay, Pagination]);

function HomeProducts() {
  return (
    <section className="home-products">
      <Container>
        <div className="primary-yellow-text">Quality Products</div>
        <h2 className="primary-heading-text">
          Burger as expected <strong>delicious</strong> one
        </h2>
        <div className="home-products__container">
          <Swiper
            loop
            speed={800}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: false,
              },
              // >= tablet
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
                pagination: false,
              },
              // >= desktop
              960: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
                speed: 1500,
              },
            }}
          >
            {homeProductsData.map(
              ({ img, name, description, price }, index) => (
                <SwiperSlide key={index}>
                  <HomeProductDetail
                    img={img}
                    name={name}
                    description={description}
                    price={price}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default HomeProducts;
