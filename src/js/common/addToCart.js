import { openCartMenu } from './sidebar';
import countProductsInCart from './countProductsInCart';
import { store } from './store';
import refs from './refs';
import { getStorageItem, setStorageItem } from './utils';
import initCart from './initCart';

const addToCart = e => {
  const id = e.target.dataset.id || e.target.parentNode.dataset.id;

  if (refs.searchBackdrop) {
    if (!refs.searchBackdrop.classList.contains('is-hidden')) {
      refs.searchBackdrop.classList.add('is-hidden');
      refs.mainSearchInput.value = '';
    }
  }

  let cartStorage = getStorageItem('cart');

  if (
    e.target.nodeName === 'BUTTON' ||
    e.target.textContent === 'Add to Cart'
  ) {
    const item = cartStorage.find(product => product.id === +id);

    if (!item) {
      let product =
        store.find(product => product.id === +id) ||
        getStorageItem('category').find(product => product.id === +id);

      product = { ...product, amount: 1 };

      cartStorage = [...cartStorage, product];
    } else {
      item.amount += 1;
    }

    setStorageItem('cart', cartStorage);
    initCart();
    openCartMenu();
  }
};

export default addToCart;
