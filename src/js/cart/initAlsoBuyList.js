import {
  BASE_URL,
  convertName,
  createStockForProduct,
  getStorageItem,
  setStorageItem,
} from '../common/utils';
import randomProductsArray from './createRandomArrayOfProducts';
import refs from '../common/refs';
import popularList from '../../templates/main/popularList.hbs';
import addService from './addService';

const initAlsoBuyList = () => {
  const xhr = new XMLHttpRequest();

  const cart = getStorageItem('cart');
  const mainId = cart[0].categories[0].id;

  const allPrices = cart.map(({ price }) => price);
  const min = Math.min(...allPrices) - 3;
  const max = Math.min(...allPrices) + 3;

  xhr.open(
    'GET',
    `${BASE_URL}/products?category.id=${mainId}&price[$lte]=${max}&price[$gt]=${min}&$limit=3000`,
  );

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const { response } = xhr;

      if (response) {
        let products = response.data;

        products = createStockForProduct(products);

        const convertNameProducts = products.map(product => {
          const newName = convertName(product.name);
          product.name = newName;
          return product;
        });

        addService(convertNameProducts, 'game');

        const productsWithService = getStorageItem('game');

        const alsoBuyProducts = randomProductsArray(productsWithService);

        refs.alsoBuyList.innerHTML = popularList(alsoBuyProducts);

        refs.loader.setAttribute('style', 'display:none');
      }
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default initAlsoBuyList;
