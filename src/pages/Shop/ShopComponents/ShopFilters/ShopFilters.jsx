import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Checkbox from "components/Checkbox/Checkbox";
// material ui icons
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { ApiContext } from "contexts/ApiContext";
import { typeOptions, priceOptions } from "utils/data";
import { FilterContext } from "contexts/FilterContext";
import "./styles.scss";

export default function ShopFilters() {
  const { getProductList } = useContext(ApiContext);
  const { filter, setFilter, prevFilter, setPrevFilter } =
    useContext(FilterContext);
  const [nameMenu, setNameMenu] = useState(null);
  const { name } = useParams();
  const handleFilterbyName = (params) => {
    setFilter({
      _limit: 16,
      _page: 1,
    });
    setNameMenu(params);
    setPrevFilter({
      prevName: null,
      prevPrice: null,
      prevRate: null,
      selectedRadio: null,
      prevSearch: "",
      selectedDrop: "Feature",
    });
  };

  useEffect(() => {
    if (nameMenu) {
      getProductList(nameMenu, filter);
    }
  }, [nameMenu]);

  const handleOnChange = (e) => {
    setPrevFilter({
      ...prevFilter,
      selectedRadio: e.target.value,
    });
  };

  const handleFilterbyByPrice = (content, params) => {
    setPrevFilter({
      ...prevFilter,
      prevSearch: null,
      selectedDrop: "Feature",
      prevRate: null,
      prevPrice: params,
    });
    switch (content) {
      case "Under $100":
        setFilter({
          _limit: 16,
          _page: 1,
          price_lte: "100",
        });
        break;
      case "Under $50":
        setFilter({
          _limit: 16,
          _page: 1,
          price_lte: "50",
        });
        break;
      case "$50 to $100":
        setFilter({
          _limit: 16,
          _page: 1,
          price_lte: "100",
          price_gte: "50",
        });
        break;
      case "Above $100":
        setFilter({
          _limit: 16,
          _page: 1,
          price_gte: "100",
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (prevFilter.prevPrice) {
      getProductList(name, filter);
    }
  }, [prevFilter.prevPrice, filter, name]);

  const handleFilterByRate = (params) => {
    setPrevFilter({
      ...prevFilter,
      prevSearch: null,
      selectedDrop: "Feature",
      selectedRadio: null,
      prevRate: { rate_like: params },
    });
    setFilter({
      _limit: 16,
      _page: 1,
      rate_like: params,
    });
  };

  useEffect(() => {
    if (prevFilter.prevRate) {
      getProductList(name, filter);
    }
  }, [prevFilter.prevRate]);
  return (
    <div className="shop-filters">
      <h2 className="shop-filters__title">Popular</h2>
      <ul className="shop-filters__list">
        {typeOptions.map(({ img, name, type }) => (
          <li
            key={name}
            onClick={() => {
              handleFilterbyName(type);
            }}
            className={
              type === nameMenu
                ? "shop-filters__item active"
                : "shop-filters__item"
            }
          >
            <img src={img} alt="Shop icons" />
            <span className="shop-filters__item-name">{name}</span>
          </li>
        ))}
      </ul>

      <h2 className="shop-filters__title">Price</h2>
      <form className="shop-filters__form">
        {priceOptions.map(({ content, range }) => (
          <Checkbox
            key={content}
            value={content}
            content={content}
            handleFilterbyByPrice={() => handleFilterbyByPrice(content, range)}
            checked={prevFilter.selectedRadio === content}
            handleOnChange={handleOnChange}
          />
        ))}
      </form>

      <h2 className="shop-filters__title">Rate</h2>
      <div
        className="shop-filters__stars"
        onClick={() => handleFilterByRate(5)}
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <span>& up</span>
      </div>
      <div
        className="shop-filters__stars"
        onClick={() => handleFilterByRate(4)}
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
      <div
        className="shop-filters__stars"
        onClick={() => handleFilterByRate(3)}
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
    </div>
  );
}
