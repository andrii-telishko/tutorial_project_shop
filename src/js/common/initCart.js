import refs from './refs';
import { getStorageItem, setStorageItem } from './utils';
import countProductsInCart from './countProductsInCart';
import { store } from '../common/store';
import changeStock from './changeStock';

const initCart = () => {
  let cart = getStorageItem('cart');
  console.log(cart);

  changeStock(cart);

  refs.productsInCart.innerHTML = countProductsInCart();

  let totalPrice = cart.reduce((reducer, { price, amount }) => {
    return (reducer += price * amount);
  }, 0);

  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
  refs.cartTotalPrice.innerHTML = `Total: $${totalPrice}`;
};

export default initCart;
