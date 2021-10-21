import { BASE_URL, convertName } from '../common/utils';
import sliderItem from '../../templates/product-page/sliderItem.hbs';
import refs from '../common/refs';
import similarProductSlider from './similarProductSlider';

const initSimilarProducts = title => {
  const name = title.toLowerCase().split(' ').join('+');

  const xhr = new XMLHttpRequest();

  xhr.open(
    'GET',
    `${BASE_URL}/products?name[$like]=*${name}*&type=Game&$limit=6`,
  );

  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const products = xhr.response.data;

      const convertNameProducts = products.map(product => {
        const newName = convertName(product.name);
        product.name = newName;
        return product;
      });

      refs.sliderList.innerHTML = sliderItem(convertNameProducts);
      similarProductSlider();
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default initSimilarProducts;
