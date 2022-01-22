

import "./HomeProductDetail.scss";
export default function HomeProductDetail(props) {
  const { img, name, description, price } = props;
  return (
    <div className="home-product">
      <div className="home-product__wrapper">
        <img
          className="home-product__img"
          src={img}
          alt="Home product"
        />
        <button className="btn">
          <span>Best Deal</span>
        </button>
      </div>
      <div className="home-product__content">
        <h3 className="home-product__name">{name}</h3>
        <p className="home-product__description">{description}</p>
        <div className="home-product__price">${price}.00</div>
      </div>
    </div>
  );
}

