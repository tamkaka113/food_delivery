import { useHistory, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import StarIcon from "@material-ui/icons/Star";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RoomIcon from "@material-ui/icons/Room";
import { ToastContainer, toast } from "react-toastify";
import "./styles.scss";
import { ApiContext } from "contexts/ApiContext";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
export default function ShopProduct(product) {
  const { id, name, img, dsc, price, rate, country } = product;
  const [viewedProduct, setViewedProduct] = useState(false);
  const [showText, setShowText] =useState(false)

  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("🦄 You  have added a product successfully!", {
      autoClose: 2000,
    });

  const cartReducer = useSelector((state) => state?.CartReducer?.viewedProduct);


  const handleAddProduct = (product) => {
    dispatch({ type: "add/product", payload: product });
    if (product && cartReducer?.amount) {
      notify();
    }
  };
  const moveToTop = () => {
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  };

  useEffect(() => {
   const checkViewProduct =()=> {
    const viewedProductList = cartReducer?.find(
      (item) => item.id === product.id
    );
  
    if (viewedProductList) {
      setViewedProduct(true)
    }

   }
   checkViewProduct()
  }, [params?.id,cartReducer])



  const handleToDetail = (product) => {
    dispatch({ type: "viewed/product", payload: product });

   

    moveToTop();
    history.push(`/shop/${params.name}/${product?.id}`);
  };

  const handleShowText = () => {
    setShowText(true)
  }
  const handleRemoveText = () => {
    setShowText(false)
   }

  return (
    <div id={id} className="shop-product ">
      <div
        onClick={() => handleToDetail(product)}
        onMouseEnter={handleShowText}
        onMouseLeave={handleRemoveText}

        className={`shop-product__img-wrapper ${viewedProduct ? "active" : ""}`}
      >
        
        <LazyLoadImage
          effect="blur"
          src={img}
          className="shop-product__img "
          alt={name}
          width="100%"
          height="100%"

        >
          
        </LazyLoadImage>
           
        <div className="shop-product__rate">
          <StarIcon />
          <span>{rate}</span>
          {viewedProduct && showText ? <div className="shop-product__product-wrapper">
            <RemoveRedEyeIcon/> <p className="shop-product__viewed-product"> You have viewed this meal </p> </div>:<p></p>
           }
        </div>
      </div>

      <div
        onClick={() => handleToDetail(product)}
        className="shop-product__content"
      >
        <div className="shop-product__name">{name}</div>
        <p className="shop-product__description">{dsc}</p>
        <div className="shop-product__row">
          <div className="shop-product__location">
            <RoomIcon />
            <span>{country}</span>
          </div>
          <div className="shop-product__price">${price}</div>
        </div>
      </div>

      <div className="shop-product__btns">
        <div className="shop-product__btn">
          <FavoriteBorderIcon />
        </div>
        <div
          onClick={() => handleAddProduct(product)}
          className="shop-product__btn"
        >
          <ShoppingCartOutlinedIcon />
        </div>
        <ToastContainer style={{ fontSize: "15px" }} />
      </div>
      <div className="shop-product__label">Favourite</div>

  
    </div>
  );
}
