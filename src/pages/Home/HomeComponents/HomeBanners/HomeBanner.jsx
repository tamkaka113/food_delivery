import React, {useContext} from "react";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { Container } from "@material-ui/core";

import "./HomeBanner.scss";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { useHistory } from "react-router-dom";
import { ApiContext } from "contexts/ApiContext";
import { FilterContext } from "contexts/FilterContext";
import queryString from "query-string";
export default function HomeBanner(props) {
  const { title, description, strong, background } = props;

  const { getProductList } = useContext(ApiContext);
  const { filter, setFilter } = useContext(FilterContext);
  const history = useHistory();
  const handleToShopView = () => {
    setFilter({
      _limit: 16,
      _page: 1,
    });

    const params = queryString.stringify(filter);

    getProductList("our-foods", filter);
    history.push(`shop/${params}?_limit=16&_page=1`);
  };

  return (
    <div
      className="home-banner"
  
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Container className="container-ui">
        <div className="home-banner__container">
          <div className="home-banner__title">{title}</div>
          <div className="home-banner__description">
            {description}
            <strong>{strong}</strong>
          </div>

          <div
            onClick={() => {
              handleToShopView();
            }}
          >
            <PrimaryButton>
              <AddShoppingCartIcon className="home-banner__icon" />
              Order now
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
