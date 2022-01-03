import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import shopApi from "apis/shopApi";
// material ui icons
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory, useParams, useLocation } from "react-router-dom";
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
  const { handlePrevFilter, filter, setFilter, isDisplay } =
    useContext(FilterContext);
  const { prevPrice, prevRate, prevSearch } = handlePrevFilter();
  const { name } = useParams();

  const totalRow =
    prevPrice || prevRate || prevSearch
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
      if (prevPrice || prevRate || prevSearch) {
        const data = await shopApi.getAll(
          name,

          prevPrice || prevRate || prevSearch
        );
        setProductLength(data.length);
      }
    };

    getFilteredProductsLength();
  }, [name, prevPrice, prevRate, prevSearch]);

  const { _page } = filter;
  useEffect(() => {
    if (_page > 1) {
      getProductList(name, filter);

      handlePrevFilter("pagination");
    }
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
        className={isDisplay ? "shop-products " : "shop-products display-flex "}
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
