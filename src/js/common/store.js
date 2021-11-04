import { getStorageItem, setStorageItem, convertName } from './utils.js';

let store = getStorageItem('store');

const setupStore = products => {
  store = products.map((product, index) => {
    let { id, name, price, image, updatedAt, manufacturer, categories, stock } =
      product;

    const newName = convertName(name);
    const convertDate = updatedAt.split('').slice(14, 16).join('');

    if (store.length !== 0) {
      stock = store[index].stock;
    }

    return {
      id,
      name: newName,
      price,
      image,
      updatedAt: convertDate,
      manufacturer,
      categories,
      stock,
    };
  });

  setStorageItem('store', store);
};

export { setupStore, store };
