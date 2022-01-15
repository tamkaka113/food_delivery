import React from "react";
import { Avatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import "./BurgerNavbar.scss";

export default function BurgerNavbar(props) {
  const { isShow, showBurgerNav } = props;

  return (
    <div className="burger-nav">
      <div
        className={
          isShow ? "burger-nav__content active" : "burger-nav__content"
        }
      >
        <ul className="burger-nav__list">
          <li className="burger-nav__item">
            <HomeIcon />
            Pages
          </li>
          <li className="burger-nav__item">
            <RestaurantMenuIcon /> Order online
          </li>
          <li className="burger-nav__item">
            <LibraryBooksIcon /> News
          </li>
          <li className="burger-nav__item">
            <StoreMallDirectoryIcon /> Store locations
          </li>
        </ul>

        <div className="burger-nav__favourite">
          <LoyaltyIcon />
          <span>Your wishlist</span>
        </div>
      </div>

      <span
        className={
          isShow ? "burger-nav__overlay active" : "burger-nav__overlay"
        }
        onClick={showBurgerNav}
      ></span>
    </div>
  );
}
