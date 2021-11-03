import { getStorageItem } from '../common/utils';
import { store } from '../common/store';

const findStockOfProduct = id => {
  let stock;

  stock =
    getStorageItem('cart').find(product => {
      if (product.id === +id) {
        return product.stock;
      }
    }) ||
    store.find(product => {
      if (product.id === +id) {
        return product.stock;
      }
    }) ||
    getStorageItem('category').find(product => {
      if (product.id === +id) {
        return product.stock;
      }
    }) ||
    getStorageItem('game').find(product => {
      if (product.id === +id) {
        return product.stock;
      }
    }) ||
    '0';

  return stock;
};

export default findStockOfProduct;
