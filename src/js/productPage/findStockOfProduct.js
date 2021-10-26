import { getStorageItem } from '../common/utils';
import { store } from '../common/store';

const findStockOfProduct = id => {
  let stock = store.find(product => {
    if (product.id === +id) {
      return product.stock;
    }
  });

  if (!stock) {
    stock = getStorageItem('category').find(product => {
      if (product.id === +id) {
        return product.stock;
      }
    });
  }
  return stock;
};

export default findStockOfProduct;
