import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import { Container,Avatar } from "@material-ui/core";
import BurgerNavbar from "./BurgerNavbar";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import { FilterContext } from "contexts/FilterContext";
import Logo from "../../assets/svgs/Common/logo.svg";
import "./style.scss";
import Cart from "components/Cart/Cart";
import { AuthContexts } from "contexts/AuthContext";
import Wishlist from "components/Wishlist";

export default function Header() {
  const { isDisplay, setIsDisplay } = useContext(FilterContext);
  const [openWishList, setOpenWishList] =useState(false)
  const {
    myUser,
    loginWithRedirect,
    logout,
  } = AuthContexts()

const showWishList =() => {
  setOpenWishList(!openWishList)
}

  const {family_name, nickname, picture} = myUser  ||''


  const [isShowBurgerNav, setIsShowBurgerNav] = useState(false);
  const cartReducer = useSelector((state) => state?.CartReducer);
  const [isHeader, setIsHeader] = useState(false);

  const history = useHistory();
  const showBurgerNav = () => {
    setIsShowBurgerNav(!isShowBurgerNav);
  };
  useEffect(() => {
    const scrollShowNav = () => {
      if (window.scrollY >= 100) {
        setIsHeader(true);
      } else {
        setIsHeader(false);
      }
    };

    window.addEventListener("scroll", scrollShowNav);

    return window.addEventListener("scroll", scrollShowNav);
  }, []);

  const handleToShopView = () => {};

  return (
    <div>
      <header
        className={isHeader ? "navbar active" : "navbar"}
        style={{ display: "block" }}
      >
        <Container>
          <div className={"navbar__container"}>
            <EmojiFoodBeverageIcon
              onClick={showBurgerNav}
              className="hamburger-btn"
            />

            <div className="navbar__link">
              <img className="navbar__logo" src={Logo} alt="logo" />
              <h2 style={{fontSize:'2.4rem'}}>oody</h2>
            </div>
  
            <div className="navbar--left">
              <ul className="navbar__list">
                <li
                  className="navbar__item"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <HomeIcon />
                  Home
                </li>
                <li className="navbar__item" onClick={() => handleToShopView()}>
                  <RestaurantMenuIcon />
                  Order online
                </li>
                <li className="navbar__item">
                  <LibraryBooksIcon />
                  News
                </li>
                <li className="navbar__item">
                  <StoreMallDirectoryIcon />
                  Store locations
                </li>
              </ul>
            </div>

            <div className="navbar--right">
              <div className="navbar__cart">
                <ShoppingCartIcon
                  onClick={() =>
                    setIsDisplay({
                      ...isDisplay,
                      isDisplayCart: true,
                    })
                  }
                />
                <div className="navbar__cart-qnt">
                  {cartReducer?.cart.length < 1 ? 0 : cartReducer?.amount}
                </div>
              </div>
            </div>

            {
              myUser?     <div className='navbar__account'>
              <Avatar src ={picture} />
              <div className='navbar__username'>{family_name|| nickname}</div>

              <ul className='navbar__account-options'>
                <li className='navbar__account-option'>
                  <PermContactCalendarIcon />
                  <span>My account</span>{' '}
                </li>
                <li
                 onClick= {showWishList}
                  className='navbar__account-option'>
                  <LoyaltyOutlinedIcon />
                  <span>My wishlist</span>{' '}
                </li>
                <li
                  onClick={logout}
                  className='navbar__account-option'>
                  <ExitToAppIcon />
                  <span>Logout</span>
                </li>

                </ul>
            </div>:  <div  onClick={loginWithRedirect} className='navbar__account'>
                  <Avatar />
                  <div className='navbar__username navbar__username--signed-out'>
                    Sign In
                  </div>
                </div>
            }
         <Wishlist openWishList={openWishList} setOpenWishList={setOpenWishList}/>
           
          </div>
         
        </Container>
      </header>
      <BurgerNavbar isShow={isShowBurgerNav} showBurgerNav={showBurgerNav} />
      <Cart />
    </div>
  );
}
