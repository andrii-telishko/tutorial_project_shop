import { setStorageItem } from '../common/utils';

const addService = (store, storageItem) => {
  const newStore = store.map(product => {
    let newProduct;
    if (product.service) {
      newProduct = { ...product };
    } else {
      newProduct = {
        ...product,
        service: {
          first: false,
          second: false,
        },
      };
    }

    return newProduct;
  });

  setStorageItem(storageItem, newStore);
};

export default addService;
