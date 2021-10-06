import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

const setupStore = products => {
  store = products.map(product => {
    const {
      id,
      name,
      price,
      image = 'https://images.philips.com/is/image/PhilipsConsumer/47PFL6704D_F7-IMS-en_US?$jpglarge$&wid=1250',
      updatedAt,
    } = product;

    const convertName = name.split(' ').slice(0, 3).join('');
    const convertDate = updatedAt.split('').slice(14, 16).join('');

    return { id, name: convertName, price, image, updatedAt: convertDate };
  });
  setStorageItem('store', store);
};

const findProduct = () => {};

export { setupStore, store, findProduct };
