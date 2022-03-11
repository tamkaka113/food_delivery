
import {
 ADD_PRODUCT,
 REMOVE_PRODUCT,
 SALE_PRODUCT,
 VIEWED_PRODUCT,
 INCREMENT_PRODUCT,
 DECREMENT_PRODUCT,
 TOTAL_PRODUCT,


} from 'store/types'
const initialState = {
  cart: [],
  viewedProduct: [],
  checkedProduct:[],
  checkedProductPrice:0,
  totalPrice: 0,
  amount: 0,
};

export default function CartReducer(state = { ...initialState }, action) {
  const product = action.payload;
  const cart = state?.cart;
  switch (action.type) {
    case ADD_PRODUCT:
 
      const newProduct = { ...product, quantity: product.quantity ? product.quantity:1 };
    
      const productExist = cart.find((item) => item.id === product.id);
      if (productExist) {
        const newProductExist = {
          ...product,
          quantity: productExist?.quantity +  newProduct?.quantity,
        };

        const newCart = cart.map((item) => {
          return item.id === productExist.id ? newProductExist : item;
        });
        return { ...state, cart: newCart };
      } else {
        const copyCart = [...cart];
        copyCart.push(newProduct);
        return { ...state, cart: copyCart };
      }

    case REMOVE_PRODUCT:
      const removedCart = cart.filter((item) => {
        return item.id !== product.id;
      });

      return { ...state, cart: removedCart };
    case INCREMENT_PRODUCT:
      const increasedProduct = cart.map((item) => {
        return item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      });

      return { ...state, cart: increasedProduct };

    case DECREMENT_PRODUCT:
      const decreasedProduct = cart.map((item) => {
        return item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
            }
          : item;
      });

      return { ...state, cart: decreasedProduct };

    case  TOTAL_PRODUCT:
      const { totalPrice, amount } = cart?.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          cartTotal.amount += quantity;
          cartTotal.totalPrice += price * quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          amount: 0,
        }
      );

      return { ...state, totalPrice, amount };

    case VIEWED_PRODUCT:
      const productList = { ...product };
      const viewedProduct = [...state?.viewedProduct];
      const existProductList = state?.viewedProduct?.find((item) => {
        return item?.id === product?.id;
      });

      if (!existProductList) {
        viewedProduct.push(productList);

        return { ...state, viewedProduct: viewedProduct };
      }


      case SALE_PRODUCT:
      const saleProduct = {...product, quantity:1  }
      const {price, quantity} = saleProduct
     
      
   if(quantity ===2) {
      const newPrice = 
          
      (price*quantity) - (price*quantity*15)/100

    return {...state,checkedProduct: saleProduct,checkedProductPrice:newPrice}
    }
    if(quantity===3) {
      const newPrice =  (price*quantity) - (price*quantity*15)/100
      return {...state,checkedProduct: saleProduct,checkedProductPrice:newPrice}

    }
    if(quantity===5) {
      const newPrice =  (price*quantity) - (price*quantity*35)/100
      return {...state,checkedProduct: saleProduct,checkedProductPrice:newPrice}

    } 
        
    return {...state,checkedProduct:saleProduct }
    
    default:
      return state;
  }
}
