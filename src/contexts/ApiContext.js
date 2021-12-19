import { useContext, useEffect, useState, createContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
 
import shopApi from "apis/shopApi";
/* import { setShopProducts } from 'features/Shop/shopSlice'; */
import { FilterContext } from "./FilterContext";
import { PHONE_BREAKPOINT } from "constants/breakpoints";
import { getProductListStartAction,getProductListSuccessAction } from "store/action/ProductAction";
// query string
import queryString from "query-string";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [totalPage, setTotalPage] = useState(0);
  const history =useHistory()

  const  [activePagination, setActivePagination] =useState(1)

  const [PaginationWithValue, setPaginationWithValue] =useState(null)
  const dispatch = useDispatch();
  const {handlePrevFilter} =useContext(FilterContext)

  console.log(PaginationWithValue)

  useEffect(() => {
    const getPagitantion = async () => {
      const pagination = await shopApi.getAll("pagination");

      setTotalPage(pagination);
    };
    getPagitantion();
  }, []);





    const PagesWithPagination =(params) => {
      
    }

    const getProductList = async (type, params) => {
      const { prevPrice, prevRate, prevSearch } = handlePrevFilter();
      const currentPagination =
        params && params.hasOwnProperty('_page') && params['_page'];
  
      const pageWithPagination =
        currentPagination && ( prevSearch);
   

        setPaginationWithValue(pageWithPagination)
      dispatch(getProductListStartAction())
      try {
        const data = await shopApi.getAll(
          type,
          {
            _limit: 16,
            ...params,
            ...pageWithPagination
          }
        );

        dispatch(getProductListSuccessAction(data));
        currentPagination
        ? setActivePagination(Number(currentPagination))
        : setActivePagination(1);
        history.push({
          pathname:type,
          search: queryString.stringify( {
            _limit:16,
            ...params,
            ...pageWithPagination
          })
        })

      } catch (error) {
        console.log(error.message);
      }
    };
  

  return (
    <ApiContext.Provider
      value={{
        getProductList,
        totalPage,
        activePagination,
        setActivePagination,
        PaginationWithValue,
        
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext };
export default ApiProvider;
