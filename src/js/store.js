import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

const setupStore = products => {
  store = products.map(product => {
    const {
      id,
      fields: { name, price, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, name, price, image };
  });
  setStorageItem('store', store);
};

const findProduct = () => {};

export { setupStore, store, findProduct };
