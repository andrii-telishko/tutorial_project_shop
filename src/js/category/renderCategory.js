import refs from '../common/refs';
import { BASE_URL } from '../common/utils';

const renderCategory = () => {
  const id = window.location.search.split('').slice(4).join('');

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${BASE_URL}/products?category.id=${id}&$limit=100`);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const { response } = xhr;
      if (response) {
        const products = response.data;

        if (products.length === 0) {
          refs.categoryTitle.textContent = 'There is products in this category';
          document.title = 'Categories';
        } else {
          const title = products[0].categories[1].name;

          refs.categoryTitle.textContent = `${title} Category`;
          document.title = `${title} Category`;
        }

        refs.totalProductsInfo.textContent = `${response.total} Products`;

        products.map(({ id, name, price, image }) => {
          const convertName = name.split(' ').slice(0, 3).join('');

          refs.productsListByCategories.insertAdjacentHTML(
            'beforeend',
            `<li class="popular__item products__item">
            <div class="popular__card">
              <img src="${image}" alt="${name}" class="popular__img">
                <h3 class="popular__title products__title">${convertName}</h3> 
              <span class="price">$${price}</span>
              <div class="popular__buttons">
              <button type="button" class="arrival__btn-cart popular-btn" data-id="${id}"></button>
                <a h ref="" type="button" class="arrival__btn-product popular-btn" data-id="${id}"></a> 
                </div>
            </div>
            
          </li>`,
          );
        });
      }
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default renderCategory;
