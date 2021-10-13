import refs from '../common/refs';
import { BASE_URL } from '../common/utils';
import pagination from '../common/pagination';

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

        const convertNameProducts = products.map(product => {
          const convertName = product.name.split(' ').slice(0, 3).join('');
          product.name = convertName;
          return product;
        });

        pagination(convertNameProducts);

        refs.totalProductsInfo.textContent =
          products.length > 24
            ? `Viewing 24 of ${response.total} products`
            : `Viewing ${response.total} products`;
      }
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default renderCategory;
