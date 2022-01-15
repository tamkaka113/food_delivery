
import { Button } from "@material-ui/core";
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

export default function DetailContent({ selectedProduct }) {
  const { name, country, dsc, rate } = selectedProduct ? selectedProduct : "";


  return (
    <>
      <div className="detail-content">
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
          <strong>$20</strong>
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

        <div className="detail-content__btns">
          <div className="detail-content__btn-handle ">
            <Button className="detail-content__btn-inc btn-circle">
              <RemoveIcon />
            </Button>

            <span className="detail-content__btn-qnt">2</span>
            <Button className="detail-content__btn-dec btn-circle">
              <AddIcon />
            </Button>
          </div>

          <div className="detail-content__add">
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
