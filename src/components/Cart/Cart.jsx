import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import CartItems from './components/CartItems';
import CartHandle from './components/CartHandle';


import EmptyCartImg from 'assets/svgs/Common/empty-cart.svg';

import './styles.scss';

function Cart() {
  


  const dispatch = useDispatch();

  const closeCart = () => {

  };


  return (
    <div className={ 'cart'}>
      <div onClick={closeCart} className='cart__overlay'></div>
      <div className='cart__container'>
        <div className='cart__heading'>
          <h2 className='cart__title'>Shopping Cart</h2>
          <div
            onClick={closeCart}
            className={
              'cart__close'
            }></div>
        </div>
     
        <CartItems />
        <CartHandle />
      </div>
    </div>
  );
}

export default Cart;
