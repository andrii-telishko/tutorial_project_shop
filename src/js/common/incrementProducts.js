import { getStorageItem, setStorageItem } from './utils';
import initCart from './initCart';
import refs from './refs';
import cartSidebarItem from '../../templates/common/cartSidebarItem.hbs';

const incrementProducts = e => {
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');
  if (e.target.dataset.add === 'increment') {
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
  } else if (e.target.dataset.add === 'decrement') {
    const amount = e.target.nextElementSibling;
    if (amount.textContent > 1) {
      cart = cart.map(product => {
        let newAmount;
        if (product.id === +id) {
          newAmount = product.amount - 1;
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
    } else {
      refs.cartSidebarList.innerHTML = '';
      cart = cart.filter(product => product.id !== +id);
      refs.cartSidebarList.insertAdjacentHTML(
        'beforeend',
        cartSidebarItem(cart),
      );
    }
  }

  setStorageItem('cart', cart);
  initCart();
};

export default incrementProducts;
