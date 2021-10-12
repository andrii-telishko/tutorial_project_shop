import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

const setupStore = products => {
  store = products.map(product => {
    const { id, name, price, image, updatedAt, manufacturer, categories } =
      product;

    const convertName = name.split(' ').slice(0, 3).join('');
    const convertDate = updatedAt.split('').slice(14, 16).join('');
    const convertCategories = categories.map(category => category.name);

    return {
      id,
      name: convertName,
      price,
      image,
      updatedAt: convertDate,
      manufacturer,
      categories: convertCategories,
    };
  });
  setStorageItem('store', store);
};

const findProduct = () => {};

export { setupStore, store, findProduct };
