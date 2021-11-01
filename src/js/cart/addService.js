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
          first: 'null',
          second: 'null',
        },
      };
    }

    return newProduct;
  });

  setStorageItem(storageItem, newStore);
};

export default addService;
