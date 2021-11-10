import { getStorageItem, setStorageItem } from '../../common/utils';
import { store } from '../../common/store';
import refs from '../../common/refs';
import init from '../init';

const addToCartFromAlsoList = e => {
  refs.tableBody.innerHTML = '';
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');

  if (e.target.classList.contains('popular-btn')) {
    const item = cart.find(product => product.id === id);

    if (!item) {
      let product =
        store.find(product => product.id === +id) ||
        getStorageItem('category').find(product => product.id === +id) ||
        getStorageItem('game').find(product => product.id === +id);

      product = { ...product, amount: 1 };

      cart = [...cart, product];
    } else {
      if (item.amount >= item.stock) {
        alert('No more games to add');
      } else {
        item.amount += 1;
      }
    }
  }

  setStorageItem('cart', cart);
  init.initCartPage(cart);
  init.initModal();
};

export default addToCartFromAlsoList;
