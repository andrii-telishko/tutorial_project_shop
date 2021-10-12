// import fetchProducts from './fetchProducts';
import { setupStore, store } from '../common/store';
import { BASE_URL } from '../common/utils';
import {
  renderFeatureSection,
  renderArrivalSection,
  renderPopularSection,
  renderCategories,
} from './renderSections';
import refs from '../common/refs';

const init = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/products?type=Game&$limit=24`);
  xhr.open('GET', `${BASE_URL}/categories?name=Video Games`);

  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const products = xhr.response;
      if (products) {
        setupStore(products.data);

        // renderCategories(store);

        renderFeatureSection(store);

        renderArrivalSection(store);

        renderPopularSection(store);
      }
    }
  };

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const products = xhr.response;
      if (products) {
        const categories = products.data[0].subCategories;

        const mainCategories = categories.splice(0, 9);

        const categoriesMarkup = mainCategories.map(({ id, name }) => {
          return `<li>
              <a class="link" href="categories.html?id=${id}">
                ${name}
              </a>
            </li>`;
        });

        const moreBtn = '<button type="button">More</button>';

        refs.categoriesList.innerHTML = [...categoriesMarkup, moreBtn].join('');

        // mainCategories.map(({ name, id }) => {
        //   refs.categoriesList.insertAdjacentHTML(
        //     'beforeend',
        //     `<li>
        //       <a class="link" href="/categories/${id}">
        //         ${name}
        //       </a>
        //     </li>`,
        //   );
        // });

        // setupStore(products.data);

        // // renderCategories(store);

        // renderFeatureSection(store);

        // renderArrivalSection(store);

        // renderPopularSection(store);
      }
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};
export default init;
