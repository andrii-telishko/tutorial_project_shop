import { getStorageItem } from './utils';

const countProductsInCart = () => {
  return getStorageItem('cart').reduce((reducer, product) => {
    return (reducer += product.amount);
  }, 0);
};

export default countProductsInCart;
