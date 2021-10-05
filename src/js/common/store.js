import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem('store');

const setupStore = products => {
  store = products.map(product => {
    const {
      id,
      name,
      price,
      image = 'https://images.philips.com/is/image/PhilipsConsumer/47PFL6704D_F7-IMS-en_US?$jpglarge$&wid=1250',
    } = product;

    const convertName = name.split(' ').slice(0, 3).join('');

    return { id, name: convertName, price, image };
  });
  setStorageItem('store', store);
};

const findProduct = () => {};

export { setupStore, store, findProduct };
