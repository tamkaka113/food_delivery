import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiContext } from "contexts/ApiContext";
import { FilterContext } from "contexts/FilterContext";
// material ui icons
import SearchIcon from "@material-ui/icons/Search";
import ViewList from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {FilterProductAction} from 'store/action/ProductAction'

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
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  const [inputValue, setInputValue] = useState("");
  const { getProductList } = useContext(ApiContext);
  const { handlePrevFilter, setFilter, filter, setIsDisplay, isDisplay } =
    useContext(FilterContext);
  const dispatch = useDispatch();
  const shopProduct = useSelector((state) => state.ProductReducer.list);

  console.log(shopProduct)
  const { setSelectedRadio, setPrevSearch, setSelectedDrop, selectedDrop } =
    handlePrevFilter();


  const handleSearch = (e) => {
    setSelectedRadio(null);

    setFilter({
      _limit: 16,
      _page: 1,
      name_like: inputValue,
    });
    e.preventDefault();

    setPrevSearch({ name_like: inputValue });
    setInputValue("");
  };

  const { name_like } = filter;
  useEffect(() => {
    if (name_like?.length > 0) {
      getProductList("our-foods", filter);
    }
  }, [filter]);

  const handleOnchange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handdleFilterBySort = (sort, value) => {

    switch (sort) {
      case "price_lth":
        shopProduct.sort((a, b) => a.price - b.price);
        break;
      case "price_htl":
        shopProduct.sort((a, b) => b.price - a.price);
        break;
      case "rate_lth":
        shopProduct.sort((a, b) => a.rate - b.rate);
        break;
      case "rate_htl":
        shopProduct.sort((a, b) => b.rate - a.rate);
        break;
    
      default:
        break;
    }

    setSelectedDrop(value);
  };
  useEffect(() => {
    const handleClickDrop = (e) => {
      const el = ref.current;
      if (el && el.contains(e.target)) {
        setIsDrop(!isDrop);
      } else {
        setIsDrop(false);
      }
    };

    window.addEventListener("click", handleClickDrop);

    return window.addEventListener("click", handleClickDrop);
  }, []);

  return (
    <div className="shop-handle">
      <form onSubmit={handleSearch} className="shop-handle__search">
        <input
          value={inputValue}
          onChange={handleOnchange}
          placeholder="Search your product"
        />
        <button className="shop-handle__search-btn">
          <SearchIcon />
        </button>
      </form>

      <div className="shop-handle__drop">
        <div ref={ref} className="shop-handle__drop-current">
          <span>{selectedDrop}</span>
          <ExpandMoreIcon />
        </div>

        <ul
          className={
            isDrop ? "shop-handle__drop-list drop" : "shop-handle__drop-list "
          }
        >
          {dataTypes.map(({ value, sort }, index) => (
            <li
              onClick={() => handdleFilterBySort(sort, value)}
              key={index}
              className="shop-handle__drop-item"
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="shop-handle__display-types ">
        <ViewList
          onClick={() => {
            setIsDisplay(true);
          }}
          className={
            isDisplay
              ? "shop-handle__display-type active"
              : "shop-handle__display-type"
          }
        />
        <ViewModuleIcon
          onClick={() => {
            setIsDisplay(false);
          }}
          className={
            !isDisplay
              ? "shop-handle__display-type active"
              : "shop-handle__display-type"
          }
        />
      </div>
    </div>
  );
}

export default ShopHandle;
