import { getStorageItem, setStorageItem } from '../common/utils';

const addToLatestProducts = product => {
  let latestProductsData = getStorageItem('latestProducts');

  const sameProduct = latestProductsData.find(({ id }) => id === product.id);

  if (sameProduct) {
    return;
  } else {
    if (latestProductsData.length < 6) {
      latestProductsData.push(product);
    } else {
      latestProductsData.shift(latestProductsData[0]);
      latestProductsData.push(product);
    }

    setStorageItem('latestProducts', latestProductsData);
  }
};

export default addToLatestProducts;
