import { getStorageItem } from '../common/utils';
import { store } from '../common/store';

const findStockOfProduct = id => {
  let product;
  console.log(getStorageItem('cart'));

  product =
    getStorageItem('cart').find(product => {
      if (product.id === +id) {
        return product;
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
    });
  // ||
  // getStorageItem('game').find(product => {
  //   if (product.id === +id) {
  //     return product.stock;
  //   }
  // }) ||
  // '0';

  return product.stock;
};

export default findStockOfProduct;
