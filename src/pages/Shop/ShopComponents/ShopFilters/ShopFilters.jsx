import { useParams, useLocation, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Checkbox from "components/Checkbox/Checkbox";

// material ui icons
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { Bread, Burger, Drinks, Pizza, Sandwich } from "utils/shopSvgs";
import { ApiContext } from "contexts/ApiContext";

import { FilterContext } from "contexts/FilterContext";

import "./styles.scss";
const typeOptions = [
  {
    img: Burger,
    name: "Burgers",
    type: "burgers",
  },
  {
    img: Bread,
    name: "Breads",
    type: "breads",
  },
  {
    img: Sandwich,
    name: "Sandwiches",
    type: "sandwiches",
  },
  {
    img: Drinks,
    name: "Drinks",
    type: "drinks",
  },
  {
    img: Pizza,
    name: "Pizzas",
    type: "pizzas",
  },
];

const priceOptions = [
  { content: "Under $100", range:{ price_lte: 100 } },
  { content: "$50 to $100", range: { price_gte: 50, price_lte: 100 }},
  { content: "Under $50", range:{ price_lte: 50 } },
  { content: "Above $100", range:{ price_gte: 50 } },
];


function ShopFilters() {
  const { getProductList } = useContext(ApiContext);
  const { filter, setFilter,prevFilter,setPrevFilter  } = useContext(FilterContext);
  const [nameMenu, setNameMenu] = useState(null);


  
  const { name } = useParams();
  const handleFilterbyName = (params) => {
    setFilter({
      _limit: 16,
      _page: 1,
    });
    setNameMenu(params);
     setPrevFilter({
      prevName:null,
      prevPrice:null,
      prevRate:null,
      selectedRadio:null,
      prevSearch:'',
      selectedDrop:'Feature'
     })

  
  };

  useEffect(() => {
    if (nameMenu) {
      getProductList(nameMenu, filter);
    }
  }, [nameMenu]); 

  const handleChangebyPrice = (e) => {
    setPrevFilter({
      ...prevFilter,
      selectedRadio:e.target.value
    })

  };

  const handleFilterbyByPrice = (content, params) => {
    setPrevFilter({
      ...prevFilter,
      prevSearch:null,
      selectedDrop:'Feature',
      prevRate:null,
      prevPrice:params
    })
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

      default:
        break;
    }
  };


  useEffect(() => {
    if (prevFilter.prevPrice) {
      getProductList(name, filter);
    }
  }, [prevFilter.prevPrice]);

  const handleFilterByRate = (params) => {
    setPrevFilter({
      ...prevFilter,
      prevSearch:null,
      selectedDrop:'Feature',
      selectedRadio:null,
      prevRate:{ rate_like:params}
    })
    setFilter({
      _limit:16,
      _page:1,
      rate_like:params
    })

  
  };


  useEffect(() => {
    if(prevFilter.prevRate) {

      getProductList(name, filter);
    }
  }, [prevFilter.prevRate])
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
            handleChangebyPrice={handleChangebyPrice}
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

export default ShopFilters;
