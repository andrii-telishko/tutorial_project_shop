import { BASE_URL } from '../common/utils';
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
        setupStore(products.data);

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
