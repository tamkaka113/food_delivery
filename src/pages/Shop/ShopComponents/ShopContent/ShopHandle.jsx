import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { ApiContext } from "contexts/ApiContext";
import { FilterContext } from "contexts/FilterContext";

// material ui icons
import SearchIcon from "@material-ui/icons/Search";
import ViewList from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./ShopHandle.scss";

const dataTypes = [
  {
    value: "Price: Low to High",
    sort: "price_lth",
  },
  {
    value: "Price: High to Low",
    sort: "price_htl",
  },
  {
    value: "Rate: Low to High",
    sort: "rate_lth",
  },
  {
    value: "Rate: High to Low",
    sort: "rate_htl",
  },
];

function ShopHandle() {
  const [inputValue, setInputValue] = useState("");
  const [isDrop, setIsDrop] = useState(false);
  const { getProductList } = useContext(ApiContext);
  const { handlePrevFilter  } = useContext(FilterContext);
  const dispatch = useDispatch();
   const {setPrevSearch} =handlePrevFilter()
  const handleSearch = (e) => {

  
    const params = {
      name_like: inputValue,
    };

    handlePrevFilter('name',params)
    e.preventDefault();
    setPrevSearch(params)
    if (!inputValue) return;
    setInputValue("");
    

    getProductList("our-foods", params);

  };

  const onFilterBySort = () => {};

  const handleSetShopProductsView = (type) => {};

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setInputValue(value);

  
  };

  return (
    <div className="shop-handle">
      <form onSubmit={handleSearch} className="shop-handle__search">
        <input
          value={inputValue}
          onChange={handleSearchChange}
          placeholder="Search your product"
        />
        <button className="shop-handle__search-btn">
          <SearchIcon />
        </button>
      </form>

      <div className="shop-handle__drop">
        <div className="shop-handle__drop-current">
          <span>tam</span>
          <ExpandMoreIcon />
        </div>

        <ul className={"shop-handle__drop-list"}>
          {dataTypes.map(({ value, sort }, index) => (
            <li
              onClick={() => onFilterBySort(sort, value)}
              key={index}
              className="shop-handle__drop-item"
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="shop-handle__display-types">
        <ViewList
          onClick={() => handleSetShopProductsView("list")}
          className="shop-handle__display-type active"
        />
        <ViewModuleIcon
          onClick={() => handleSetShopProductsView("grid")}
          className="shop-handle__display-type active"
        />
      </div>
    </div>
  );
}

export default ShopHandle;
