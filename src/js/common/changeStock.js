import { setStorageItem } from './utils';
import { store } from './store';

const changeStock = storeArr => {
  const cart = storeArr.map(product => {
    store.forEach(item => {
      if (product.id === item.id) {
        product.stock = item.stock;
      }
    });
    return product;
  });

  setStorageItem('cart', cart);
};

export default changeStock;
