import { useEffect, useState, createContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import shopApi from "apis/shopApi";
import {
  getProductListStartAction,
  getProductListSuccessAction,
} from "store/action/ProductAction";
import queryString from "query-string";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [totalPage, setTotalPage] = useState(0);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    const getPagination = async () => {
      const pagination = await shopApi.getAll("pagination");

      setTotalPage(pagination);
    };
    getPagination();
  }, []);

  const getProductList = async (type, params) => {
    dispatch(getProductListStartAction());
    try {
      const data = await shopApi.getAll(type, params);

      dispatch(getProductListSuccessAction(data));
      history.push({
        pathname: type,
        search: queryString.stringify(params),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        getProductList,
        totalPage,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext };
export default ApiProvider;
