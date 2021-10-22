import { BASE_URL } from '../common/utils';
import refs from '../common/refs';
import images from './images';
import restCategoriesTpl from '../../templates/main/restCategories.hbs';

const initCategories = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/categories?name=Video Games`);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const products = xhr.response;
      if (products) {
        const categories = products.data[0].subCategories;

        const mainCategories = categories.splice(0, 9);

        const categoriesMarkup = mainCategories.map((item, index) => {
          for (let i = 0; i < 10; i += 1) {
            if (i === index) {
              return `<li class="categories-item">
              
              <a class="link" href="categories.html?id=${item.id}">
              <img src="${images[i]}" alt="${item.name}" class="category-img">
                ${item.name}
              </a>
            </li>`;
            }
            continue;
          }
        });

        const moreBtn = `<li class="categories-item">
        <button class="categories-item more-btn" type="button">
          <img src="${images[9]}" class="category-img" alt="more-icon"/>
          More
        </button >
        </li>`;

        refs.categoriesList.innerHTML = [...categoriesMarkup, moreBtn].join('');

        refs.restCategories.insertAdjacentHTML(
          'beforeend',
          restCategoriesTpl(categories),
        );
      }
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default initCategories;
