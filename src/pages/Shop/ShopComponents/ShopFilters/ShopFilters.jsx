import { useParams, useLocation, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Checkbox from "components/Checkbox/Checkbox";

// material ui icons
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import queryString from 'query-string'
import { Bread, Burger, Drinks, Pizza, Sandwich } from "utils/shopSvgs";
import { ApiContext } from "contexts/ApiContext";
import {FilterContext} from 'contexts/FilterContext'
import {pushToUrl} from 'store/action/ProductAction'
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
  { content: "Under $100", range: { price_lte: 100 } },
  { content: "$50 to $100", range: { price_gte: 50, price_lte: 100 } },
  { content: "Under $50", range: { price_lte: 50 } },
  { content: "Above $100", range: { price_gte: 100 } },
];

function ShopFilters() {
  const { getProductList} = useContext(ApiContext);
  const { handlePrevFilter} = useContext(FilterContext);
  const history = useHistory();
  const [nameMenu, setNameMenu] = useState(null);
 const {name} =useParams()

 

  const handleFilterbyName = (params) => {
    const { prevName, setPrevName, setSelectedRadio, setNameActive } =
    handlePrevFilter('name', params);
    if (params !== prevName) {
      getProductList(params)
      setSelectedRadio(null);
    }

    setNameMenu(params);
    getProductList(params) 
  
   setNameActive(params)
  
  };


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
          <Checkbox key={content} value={content} content={content} />
        ))}
      </form>

      <h2 className="shop-filters__title">Rate</h2>
      <div className="shop-filters__stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <span>& up</span>
      </div>
      <div className="shop-filters__stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
      <div className="shop-filters__stars">
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
