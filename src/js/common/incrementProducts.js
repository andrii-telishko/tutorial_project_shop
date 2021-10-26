import { getStorageItem, setStorageItem } from './utils';
import initCart from './initCart';
import refs from './refs';

const incrementProducts = e => {
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');
  if (e.target.textContent === '+') {
    const amount = e.target.previousElementSibling;
    cart = cart.map(product => {
      let newAmount;
      if (product.id === +id) {
        newAmount = product.amount + 1;
        product = { ...product, amount: newAmount };
      }
      return product;
    });
    amount.textContent = cart.find(product => {
      let newAmount;
      if (product.id === +id) {
        newAmount = product.amount;
      }
      return newAmount;
    }).amount;
  }

  setStorageItem('cart', cart);
  initCart();
};

export default incrementProducts;
