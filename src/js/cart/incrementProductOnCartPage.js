import { getStorageItem, setStorageItem } from '../common/utils';
import refs from '../common/refs';
import initCartPage from './initCartPage';

const incrementProductOnCartPage = e => {
  refs.couponForm.reset();
  let store = getStorageItem('cart');
  const { id } = e.target.dataset;
  refs.tableBody.innerHTML = '';
  if (e.target.dataset.add === 'increment') {
    store = store.map(product => {
      let newProduct = {};
      if (product.id === +id) {
        if (product.amount >= product.stock) {
          alert('There is no more game in stock');
          newProduct = { ...product };
        } else {
          newProduct = { ...product, amount: product.amount + 1 };
        }
      } else {
        newProduct = { ...product };
      }
      return newProduct;
    });
  } else if (e.target.dataset.add === 'decrement') {
    store = store.map(product => {
      let newProduct = {};

      if (product.id === +id) {
        if (product.amount > 1) {
          newProduct = { ...product, amount: product.amount - 1 };
        } else {
          newProduct = { ...product };
        }
      } else {
        newProduct = { ...product };
      }
      return newProduct;
    });
  }

  setStorageItem('cart', store);
  initCartPage(store);
};

export default incrementProductOnCartPage;
