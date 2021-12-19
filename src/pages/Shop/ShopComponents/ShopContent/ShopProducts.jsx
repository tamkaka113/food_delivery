import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from "@material-ui/core";
import shopApi from "apis/shopApi";
// material ui icons
import CircularProgress from "@material-ui/core/CircularProgress";
import {useHistory, useParams,useLocation} from 'react-router-dom'
import ShopProduct from "components/ShopProduct/ShopProduct";
import { getParamsToUrl } from "utils/tools";
import "./ShopProducts.scss";
import { ApiContext } from 'contexts/ApiContext';
import  {FilterContext} from 'contexts/FilterContext'
export default function ShopProducts({pushToUrl}) {
  const shopProduct = useSelector((state) => state.ProductReducer);

  const isLoading = useSelector((state) => state.ProductReducer.loading)



  
  const { totalPage, getProductList,activePagination } = useContext(ApiContext);
  const { handlePrevFilter } = useContext(FilterContext);


  const [productLength,setProductLength] = useState(null)
  const {prevSearch} =handlePrevFilter()
  const {name} = useParams()

  const history =useHistory()

 const maxPages = prevSearch ? Math.ceil(productLength/16): 4 

console.log(maxPages)

  useEffect(() => {
    const getFilteredProductsLenght = async () => {
      if (prevSearch) {
        const data = await shopApi.getAll(
          name,
          prevSearch
        );

        setProductLength(data.length)
      }
    };

    getFilteredProductsLenght();
}, [name,prevSearch]) 

const  handleChangePage = (nextPage) => {
  const params = {
    _page: nextPage,
  }
  handlePrevFilter('pagination')
  getProductList(name,params)



}
if (isLoading) {
  return (
    <div className='spinner'>
      <CircularProgress thickness={5} style={{ color: 'red' }} />
    </div>
  );
}

  return (
    <>
      <div className="shop-products">
        {shopProduct.list && shopProduct.list?.map((item) => (
          <ShopProduct key={item.id} {...item} />
        ))}
      </div>
      <Grid container justifyContent="center">
        <Pagination  count={maxPages} page={activePagination} onChange={(e,nextPage)=>{
        handleChangePage(nextPage)
        }} color="primary" size="large" />
        </Grid>
    </>
  );
}
