import { getStorageItem, setStorageItem } from '../utils';
import { initCart } from '../init';
import refs from '../refs';
import cartSidebarItem from '../../../templates/common/cartSidebarItem.hbs';
import pagination from '../pagination';

const incrementProducts = e => {
  let store = getStorageItem('store');
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');
  if (e.target.dataset.add === 'increment') {
    refs.productsList.innerHTML = '';
    const amount = e.target.previousElementSibling;

    cart = cart.map(product => {
      let newAmount;
      if (product.id === +id) {
        if (product.stock !== 0) {
          product.stock -= 1;
          newAmount = product.amount + 1;
          product = { ...product, amount: newAmount };
        } else {
          alert('There is no more this game in stock');
          product = { ...product };
        }
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

    store = store.map(product => {
      if (product.id === +id) {
        product.stock -= 1;
      } else {
        product.stock -= 0;
      }
      return product;
    });
  } else if (e.target.dataset.add === 'decrement') {
    refs.productsList.innerHTML = '';
    const amount = e.target.nextElementSibling;
    if (amount.textContent > 1) {
      cart = cart.map(product => {
        let newAmount;
        if (product.id === +id) {
          product.stock += 1;
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

    store = store.map(product => {
      if (product.id === +id) {
        product.stock += 1;
      } else {
        product.stock += 0;
      }
      return product;
    });
  }

  setStorageItem('cart', cart);
  setStorageItem('store', store);
  initCart();
  pagination(getStorageItem('store'));
};

export default incrementProducts;
