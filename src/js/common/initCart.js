import refs from './refs';
import { getStorageItem } from './utils';
import countProductsInCart from './countProductsInCart';

const initCart = () => {
  const cart = getStorageItem('cart');

  refs.productsInCart.innerHTML = countProductsInCart();

  const totalPrice = cart.reduce((reducer, { price, amount }) => {
    return (reducer += price * amount);
  }, 0);

  refs.cartTotalPrice.innerHTML = `Total: $${totalPrice}`;
};

export default initCart;
