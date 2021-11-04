import { openCartMenu } from '../common/sidebar';

import refs from '../common/refs';
import { getStorageItem, setStorageItem } from '../common/utils';
import initCart from '../common/initCart';

import pagination from '../common/pagination';

const addToCartOnCategoryPage = e => {
  const id = e.target.dataset.id || e.target.parentNode.dataset.id;

  if (refs.searchBackdrop) {
    if (!refs.searchBackdrop.classList.contains('is-hidden')) {
      refs.searchBackdrop.classList.add('is-hidden');
      refs.mainSearchInput.value = '';
    }
  }

  let cartStorage = getStorageItem('cart');
  let category = getStorageItem('category');

  if (
    e.target.nodeName === 'BUTTON' ||
    e.target.textContent === 'Add to Cart'
  ) {
    const item = cartStorage.find(product => product.id === +id);
    if (!item) {
      let product = category.find(product => product.id === +id);

      product.stock -= 1;

      product = { ...product, amount: 1 };

      cartStorage = [...cartStorage, product];
    } else {
      if (item.stock === 0) {
        alert('No more games to add');
      } else {
        item.stock -= 1;
        item.amount += 1;
        category = category.map(product => {
          if (product.id === item.id) {
            product.stock = item.stock;
          }

          return product;
        });
      }
    }

    setStorageItem('cart', cartStorage);
    setStorageItem('category', category);
    initCart();
    openCartMenu();
    pagination(category);
  }
};

export default addToCartOnCategoryPage;
