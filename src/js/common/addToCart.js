import { openCartMenu } from './sidebar';

import refs from './refs';
import { getStorageItem, setStorageItem } from './utils';
import initCart from './initCart';

import pagination from './pagination';

const addToCart = e => {
  const id = e.target.dataset.id || e.target.parentNode.dataset.id;

  if (refs.searchBackdrop) {
    if (!refs.searchBackdrop.classList.contains('is-hidden')) {
      refs.searchBackdrop.classList.add('is-hidden');
      refs.mainSearchInput.value = '';
    }
  }

  let cartStorage = getStorageItem('cart');
  let store = getStorageItem('store');

  if (
    e.target.nodeName === 'BUTTON' ||
    e.target.textContent === 'Add to Cart'
  ) {
    const item = cartStorage.find(product => product.id === +id);
    if (!item) {
      let product =
        store.find(product => product.id === +id) ||
        getStorageItem('category').find(product => product.id === +id);

      product.stock -= 1;

      product = { ...product, amount: 1 };

      cartStorage = [...cartStorage, product];
    } else {
      if (item.stock === 0) {
        alert('No more games to add');
      } else {
        item.stock -= 1;
        item.amount += 1;
        store = store.map(product => {
          if (product.id === item.id) {
            product.stock = item.stock;
          }

          return product;
        });
      }
    }

    setStorageItem('cart', cartStorage);
    setStorageItem('store', store);
    initCart();
    openCartMenu();
    pagination(getStorageItem('store'));
  }
};

export default addToCart;
