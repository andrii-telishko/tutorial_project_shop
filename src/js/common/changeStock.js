import { setStorageItem, getStorageItem } from './utils';
import { store } from './store';

const changeStock = stock => {
  store.map(product => {
    stock.forEach(item => {
      if (product.id === item.id) {
        product.stock = item.stock;
      }
    });
  });
  setStorageItem('store', store);
};

export default changeStock;
