import refs from '../common/refs';
import { BASE_URL, convertName, findId } from '../common/utils';
import pagination from '../common/pagination';
import renderCompanies from '../common/renderCompanies';
import filters from '../common/filters/filters';

const renderCategory = () => {
  const id = findId();

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
          const newName = convertName(product.name);
          product.name = newName;
          return product;
        });

        const convertDataProducts = convertNameProducts.map(product => {
          const newDate = product.updatedAt.split('').slice(14, 16).join('');
          product.updatedAt = newDate;
          return product;
        });

        pagination(convertDataProducts);

        refs.totalProductsInfo.textContent =
          products.length > 24
            ? `Viewing 24 of ${convertNameProducts.length} products`
            : `Viewing ${response.total} products`;

        renderCompanies(products);
        filters(products);
      }
    }
  };

  xhr.onerror = function () {
    alert('Request failed');
  };
};

export default renderCategory;
