import { getStorageItem, setStorageItem, convertName } from './utils.js';

let store = getStorageItem('store');

const setupStore = products => {
  store = products.map(product => {
    const { id, name, price, image, updatedAt, manufacturer, categories } =
      product;

    const newName = convertName(name);
    const convertDate = updatedAt.split('').slice(14, 16).join('');

    return {
      id,
      name: newName,
      price,
      image,
      updatedAt: convertDate,
      manufacturer,
      categories,
    };
  });
  setStorageItem('store', store);
};

export { setupStore, store };
