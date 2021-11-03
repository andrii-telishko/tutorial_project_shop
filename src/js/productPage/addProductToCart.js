import { openCartMenu } from '../common/sidebar';
// import { store } from '../common/store';
import refs from '../common/refs';
import { getStorageItem, setStorageItem } from '../common/utils';
import initCart from '../common/initCart';
import renderStock from './renderStock';

const addProductToCart = e => {
  const id = e.target.dataset.id || e.target.parentNode.dataset.id;
  let store = getStorageItem('store');

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

    const productCount =
      +refs.productContainer.lastElementChild.lastElementChild
        .previousElementSibling.lastElementChild.previousElementSibling
        .textContent;

    if (!item) {
      let product =
        store.find(product => product.id === +id) ||
        getStorageItem('category').find(product => product.id === +id) ||
        getStorageItem('game').find(product => product.id === +id);

      if (!product) {
        alert('Sorry, you can not add this game to cart');
      } else {
        product = { ...product, amount: productCount };
        product.stock -= productCount;
        cartStorage = [...cartStorage, product];
        store = store.map(item => {
          if (item.id === +id) {
            item.stock = product.stock;
          }
          return item;
        });
      }
    } else {
      if (productCount > item.stock) {
        alert('No more games to add');
      } else {
        item.amount += productCount;
        item.stock -= productCount;
        store = store.map(product => {
          if (product.id === +id) {
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
    renderStock(id, refs.productContainer.lastElementChild.children[1]);
  }
};

export default addProductToCart;
