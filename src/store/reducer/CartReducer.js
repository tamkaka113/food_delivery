const initialState = {
  cart: [],
  viewedProduct:[],
  totalPrice:0,
  amount:0,
  
};

export default function CartReducer(state = { ...initialState }, action) {
  const product = action.payload;
  const cart = state?.cart

  switch (action.type) {
    case "add/product":
      const newProduct = { ...product, quantity: 1 };

      const productExist = cart.find((item) => item.id === product.id);
      if (productExist) {
        const newProductExist = {
          ...product,
          quantity: productExist?.quantity + 1,
        };

        const newCart = cart.map((item) => {
          return item.id === productExist.id ? newProductExist : item;
        });
        return {...state,cart: newCart };


       
      } else {
        const copyCart = [...cart];
        copyCart.push(newProduct);
        return {...state,cart: copyCart };
      }
    
    case "remove/product":
      const removedCart = cart.filter((item) => {
        return item.id !== product.id;
      });

      return {...state,cart: removedCart };
    case 'increment/product':
    
   const increasedProduct = cart.map((item) =>
    { return item.id ===product.id
    ? {
        ...item,
        quantity:item.quantity + 1
    }:item
    
    })

    return {...state,cart:increasedProduct}
   
    case 'decrement/product':
    
   const decreasedProduct = cart.map((item) =>
    { return item.id ===product.id
    ? {
        ...item,
        quantity: item.quantity - (item.quantity > 1 ? 1 : 0),

    }:item

    })

    return {...state,cart:decreasedProduct}
     
    case 'total/product':
  
   const {totalPrice,amount} = cart?.reduce((cartTotal, cartItem) => {
     
  const {price, quantity} = cartItem
  cartTotal.amount += quantity
  cartTotal.totalPrice += price*quantity
    return cartTotal
   },{
     totalPrice:0,
     amount:0
     
   })

    return {...state, totalPrice, amount}

    case 'viewed/product':
 
      const existProductList = state?.viewedProduct.find((item) => {
         return item.id === product.id
      })

      if(!existProductList) {
     
        const ProductList = { ...product};
        const viewedProduct = [...state?.viewedProduct];
        viewedProduct.push(ProductList);
  
         return {...state,viewedProduct: viewedProduct };
      }
     

    default:
      return state;
  }


}
