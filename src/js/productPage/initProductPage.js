import { BASE_URL } from '../common/utils';
import renderProduct from '../../templates/product-page/product.hbs';
import refs from '../common/refs';
import initSimilarProducts from './initSimilarProducts';
import addToLatestProducts from './latestProductsData';
import { getStorageItem } from '../common/utils';
import sliderItem from '../../templates/product-page/sliderItem.hbs';

const initProductPage = () => {
  const id = window.location.search.split('').slice(4).join('');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${BASE_URL}/products?id=${id}`);

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const product = xhr.response.data[0];

      addToLatestProducts(product);
      const convertName = product.name.split(' ').slice(0, 2).join(' ');

      document.title = convertName;

      refs.productContainer.innerHTML = renderProduct(product);

      initSimilarProducts(convertName);

      const latestProducts = getStorageItem('latestProducts');

      refs.latestList.innerHTML = sliderItem(latestProducts);
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default initProductPage;
