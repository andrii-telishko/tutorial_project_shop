import { getStorageItem, setStorageItem } from '../common/utils';

const addToLatestProducts = product => {
  let latestProductsData = getStorageItem('latestProducts');

  if (latestProductsData.length < 6) {
    latestProductsData.push(product);
  } else {
    latestProductsData.shift(latestProductsData[0]);
    latestProductsData.push(product);
  }

  setStorageItem('latestProducts', latestProductsData);
};

export default addToLatestProducts;
