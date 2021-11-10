import { BASE_URL, convertName, findId } from '../common/utils';
import renderProduct from '../../templates/product-page/product.hbs';
import refs from '../common/refs';
import initSimilarProducts from './initSimilarProducts';
import addToLatestProducts from './latestProductsData';
import initCommonRatting from './initCommonRating';
import initLatestProducts from './initLatestProducts';
import renderReviews from './renderReviews';
import renderStock from './renderStock';

const initProductPage = () => {
  const id = findId();

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
      const newName = convertName(product.name);

      document.title = newName;

      refs.productContainer.innerHTML = renderProduct(product);

      renderStock(id, refs.productContainer.lastElementChild.children[1]);

      initSimilarProducts(newName);

      initLatestProducts();
      renderReviews();
      initCommonRatting(id);

      refs.loader.setAttribute('style', 'display: none');
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default initProductPage;
