import { useContext, useEffect, useRef, useState } from "react";
import { ApiContext } from "contexts/ApiContext";
import { FilterContext } from "contexts/FilterContext";
// material ui icons
import SearchIcon from "@material-ui/icons/Search";
import ViewList from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import "./ShopHandle.scss";
import { Categories, dataTypes } from "utils/data";
export default function ShopHandle() {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  const [inputValue, setInputValue] = useState("");
  const { getProductList } = useContext(ApiContext);
  const {
    setFilter,
    filter,
    setIsDisplay,
    isDisplay,
    prevFilter,
    setPrevFilter,
  } = useContext(FilterContext);
  const shopProduct = useSelector((state) => state.ProductReducer.list);

  const handleSearch = (e) => {
    setPrevFilter({
      ...prevFilter,
      selectedDrop: "Feature",
      selectedRadio: null,
      prevSearch: { name_like: inputValue },
    });

    Categories.push(inputValue);

    setFilter({
      _limit: 16,
      _page: 1,
      name_like: inputValue,
    });
    e.preventDefault();
    setInputValue("");
  };

  const { name_like } = filter;
  useEffect(() => {
    if (name_like?.length > 0) {
      getProductList("our-foods", filter);
    }
    // eslint-disable-next-line
  }, [filter, name_like?.length]);

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

    setPrevFilter({
      ...prevFilter,
      selectedDrop: value,
    });
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
    // eslint-disable-next-line

    window.addEventListener("click", handleClickDrop);

    return window.addEventListener("click", handleClickDrop);
  }, [setIsDrop]);

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
          <span>{prevFilter.selectedDrop}</span>
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
            setIsDisplay({
              ...isDisplay,
              isDisplayProduct: true,
            });
          }}
          className={
            isDisplay.isDisplayProduct
              ? "shop-handle__display-type active"
              : "shop-handle__display-type"
          }
        />
        <ViewModuleIcon
          onClick={() => {
            setIsDisplay({
              ...isDisplay,
              isDisplayProduct: false,
            });
          }}
          className={
            !isDisplay.isDisplayProduct
              ? "shop-handle__display-type active"
              : "shop-handle__display-type"
          }
        />
      </div>
    </div>
  );
}
