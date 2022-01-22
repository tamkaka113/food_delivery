import { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import shopApi from "apis/shopApi";
import ShopProduct from "components/ShopProduct/ShopProduct";
import { Categories } from "utils/data";
import "./styles.scss";
import { ApiContext } from "contexts/ApiContext";
export default function DetailProducts({ selectedProduct }) {

  const { name, id } = useParams();

  const [products, setProducts] = useState([]);

  const checkMatch = () => {
    for (let data of Categories) {
      if (selectedProduct?.name?.toLowerCase()?.indexOf(data) >= 0) {
        return data;
      }
    }

    return null;
  };

  const params = {
    _limit: 16,
    name_like: checkMatch(),
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await shopApi.getAll(name, params);
      let dataProducts = [];
      for (let i = 0; i < data.length; i++) {
        dataProducts.push(data[i]);
        data.splice(data[i], 1);
      }
      if (dataProducts) {
        const newProducts = dataProducts.filter(
          (item) => item.id !== selectedProduct?.id
        );
        setProducts(newProducts);
      }

      if (dataProducts.length < 4) {
        /*  getProductList(name)  */
      }
    };
    getProducts();
  }, [checkMatch(), name, id, selectedProduct]);

  return (
    <div className="detail-products">
      <div className="primary-yellow-text">Best foods</div>
      <h2 className="primary-heading-text">Related Products</h2>
      <div className="detail-products__wrapper">
        {products &&
          products.map(
            (item, index) =>
              index < 5 && <ShopProduct key={item?.id} {...item} />
          )}
      </div>
    </div>
  );
}
