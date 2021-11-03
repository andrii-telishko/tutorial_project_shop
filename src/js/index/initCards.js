import { BASE_URL, createStock, getStorageItem } from '../common/utils';
import {
  renderFeatureSection,
  renderArrivalSection,
  renderPopularSection,
} from './renderSections';
import { setupStore, store } from '../common/store';

const initCards = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/products?type=Game&$limit=158`);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const products = xhr.response;
      if (products) {
        createStock(products.data, 'productsStock');

        const stockProducts = products.data.map((product, index) => {
          let newProduct;
          newProduct = {
            ...product,
            stock: getStorageItem('productsStock')[index],
          };
          return newProduct;
        });

        setupStore(stockProducts);

        renderFeatureSection(store);

        renderArrivalSection(store);

        renderPopularSection(store);
      }
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default initCards;
