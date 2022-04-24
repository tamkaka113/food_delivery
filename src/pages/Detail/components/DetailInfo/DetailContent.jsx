import { Button } from "@material-ui/core";
import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import "./DetailContent.scss";
import { FilterContext } from "contexts/FilterContext";
import Checkbox from "components/Checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { dataOptions } from "utils/data";

import { ADD_PRODUCT } from "store/types";
export default function DetailContent({ selectedProduct }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { prevFilter, setPrevFilter } = useContext(FilterContext);
  const { checkedProduct } = useSelector((state) => state?.CartReducer);

  const { cart } = useSelector((state) => state?.CartReducer);
  const [qnt, setQnt] = useState(1);
  const [price, setPrice] = useState(null);
  const [prevId, setPrevId] = useState("");
  const { name, country, dsc, rate } = selectedProduct ? selectedProduct : "";
  const notify = () =>
    toast.success("🦄 You  have added a product successfully!", {
      autoClose: 2000,
    });

  const newProduct = { ...checkedProduct, quantity: qnt };

  useLayoutEffect(() => {
    const quantity = newProduct?.quantity;
    const price = newProduct?.price;
    if (prevId !== id) {
      setQnt(1);
    }
    switch (quantity) {
      case 1:
        setPrice(newProduct?.price);
        setPrevFilter({
          ...prevFilter,
          selectedRadio: null,
        });
        break;
      case 2:
        setPrevFilter({
          ...prevFilter,
          selectedRadio: "Buy 2 get 15 percent off",
        });

        setPrice(price * quantity - (price * quantity * 15) / 100);
        break;
      case 3:
      case 4:
        setPrevFilter({
          ...prevFilter,
          selectedRadio: "Buy 3 get 25 percent off",
        });
        setPrice(price * quantity - (price * quantity * 25) / 100);
        break;
      case 5:
        setPrevFilter({
          ...prevFilter,
          selectedRadio: "Buy 5 get 35 percent off",
        });
        setPrice(price * quantity - (price * quantity * 35) / 100);
        break;
      default:
        setPrice(price * quantity - (price * quantity * 55) / 100);
        break;
    }
    setPrevId(id);
    // eslint-disable-next-line
  }, [newProduct?.quantity, id, prevId, price]);

  const handleOnChange = (e) => {
    setPrevFilter({
      ...prevFilter,
      selectedRadio: e.target.value,
    });

    setQnt(parseInt(e.target.name));
  };
  const handleDecreaseProduct = () => {
    qnt > 1 && setQnt(qnt - 1);
  };

  const handleIncreaseProduct = () => {
    setQnt(qnt + 1);
  };

  const handleAddToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
    if (cart) {
      notify();
    }
  };

  return (
    <>
      <div className="detail-content">
        <ToastContainer />
        <h2 className="detail-content__title">{name}</h2>

        <div className="detail-content__rate">
          <div className="detail-content__stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            {rate === 5 ? <StarIcon /> : <StarBorderIcon />}
          </div>
          <div className="detail-content__reviews">
            <span className="detail-content__reviews-qnt"></span>
            <span> Customer Reviews</span>
          </div>
        </div>

        <div className="detail-content__price">
          <strong>{price?.toFixed()}</strong>
        </div>

        <div className="detail-content__tags">
          <div className="detail-content__tag">
            <span className="detail-content__tag-label">Category:</span>
            <span className="detail-content__tag-detail category">teen</span>
          </div>
          <div className="detail-content__tag">
            <span className="detail-content__tag-label">Country:</span>
            <span className="detail-content__tag-detail">{country}</span>
          </div>
        </div>

        <p className="detail-content__description">{dsc}</p>
        <form className="detail-content__form">
          <div className="detail-content__form-title">Choose your options</div>
          {dataOptions.map(({ content, value }) => (
            <Checkbox
              key={content}
              checked={qnt > 1 && prevFilter?.selectedRadio === content}
              content={content}
              value={value}
              handleOnChange={handleOnChange}
            />
          ))}
        </form>
        <div className="detail-content__btns">
          <div className="detail-content__btn-handle ">
            <Button className="detail-content__btn-inc btn-circle">
              <RemoveIcon
                onClick={() => {
                  handleDecreaseProduct();
                }}
              />
            </Button>

            <span className="detail-content__btn-qnt">
              {newProduct?.quantity}
            </span>
            <Button className="detail-content__btn-dec btn-circle">
              <AddIcon
                onClick={() => {
                  handleIncreaseProduct();
                }}
              />
            </Button>
          </div>

          <div
            className="detail-content__add"
            onClick={() => handleAddToCart(newProduct)}
          >
            <PrimaryButton subClass="red">
              <AddShoppingCartOutlinedIcon />
              <span>Add to cart</span>
            </PrimaryButton>
          </div>

          <Button className="detail-content__btn-like btn-circle">
            <FavoriteBorderIcon />
          </Button>
        </div>

        <div className="detail-content__commits">
          <div className="detail-content__commit">
            <LocalShippingOutlinedIcon />
            <span>Free global shipping on all orders</span>
          </div>
          <div className="detail-content__commit">
            <EventAvailableOutlinedIcon />
            <span>2 hours easy returns if you change your mind</span>
          </div>
          <div className="detail-content__commit">
            <LocalOfferOutlinedIcon />
            <span>Order before noon for same day dispatch</span>
          </div>
        </div>
      </div>
    </>
  );
}
