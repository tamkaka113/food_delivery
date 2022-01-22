import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import shopApi from "apis/shopApi";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";
import ShopProduct from "components/ShopProduct/ShopProduct";
import ShopEmpty from "./ShopEmpty";
import "./ShopProducts.scss";
import { ApiContext } from "contexts/ApiContext";
import { FilterContext } from "contexts/FilterContext";
export default function ShopProducts() {
  const shopProduct = useSelector((state) => state.ProductReducer);

  const isLoading = useSelector((state) => state.ProductReducer.loading);
  const [productLength, setProductLength] = useState(null);
  const { totalPage, getProductList } = useContext(ApiContext);
  const { filter, setFilter, isDisplay, prevFilter, setPrevFilter } =
    useContext(FilterContext);
  const { name } = useParams();
  const moveToTop = () => {
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  };
  const totalRow =
    prevFilter.prevPrice || prevFilter.prevRate || prevFilter.prevSearch
      ? Math.ceil(productLength / 16)
      : Math.ceil(totalPage[name] / 16);
  const handleChangePage = (nextPage) => {
    setFilter({
      ...filter,
      _page: nextPage,
    });
  };

  useEffect(() => {
    const getFilteredProductsLength = async () => {
      if (
        prevFilter.prevPrice ||
        prevFilter.prevRate ||
        prevFilter.prevSearch
      ) {
        const data = await shopApi.getAll(
          name,

          prevFilter.prevPrice || prevFilter.prevRate || prevFilter.prevSearch
        );
        setProductLength(data.length);
      }
    };

    getFilteredProductsLength();
  }, [name, prevFilter.prevPrice, prevFilter.prevRate, prevFilter.prevSearch]);

  const { _page } = filter;
  useEffect(() => {
    if (_page > 1) {
      getProductList(name, filter);

      setPrevFilter({
        ...prevFilter,
        prevName: null,
        selectedDrop: "Feature",
      });
    } 
const moveTopId =setTimeout(() => {
      if(!isLoading) {

        moveToTop()
      }
    }, 500);

    return (()=>{
      clearTimeout(moveTopId)
   });
  }, [filter]);

  if (isLoading) {
    return (
      <div className="spinner">
        <CircularProgress thickness={5} style={{ color: "red" }} />
      </div>
    );
  }

  return (
    <>
      {shopProduct?.list.length <= 0 && <ShopEmpty />}
      <div
        className={isDisplay.isDisplayProduct ? "shop-products " : "shop-products display-flex "}
      >
        {shopProduct?.list &&
          shopProduct?.list?.map((item) => (
            <ShopProduct key={item.id} {...item} />
          ))}
      </div>
      <Grid container justifyContent="center">
        {shopProduct.list.length > 0 && (
          <Pagination
            count={totalRow}
            page={_page}
            onChange={(e, nextPage) => {
              handleChangePage(nextPage);
            }}
            color="primary"
            size="large"
          />
        )}
      </Grid>
    </>
  );
}
