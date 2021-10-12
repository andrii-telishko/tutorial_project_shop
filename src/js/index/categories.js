import refs from '../common/refs';
import { store } from '../common/store';

const openCategories = e => {
  refs.categoriesProductsList.innerHTML = '';
  refs.categoriesOverlay.classList.add('visible');

  const categories = store.filter(product => {
    if (
      product.categories.includes(e.target.parentElement.dataset.name) ||
      product.categories.includes(e.target.dataset.name)
    ) {
      return product;
    }
  });
  categories.map(category => {
    refs.categoriesProductsList.insertAdjacentHTML(
      'beforeend',
      `<li class="category-product-item">
        <div>
        <button type="button" data-name="${category.name}">

        <img src="${category.image}" alt="${category.name}" class="category-img">
        <h5 class="category-product-title">${category.name}</h5>
        <p class="category-product-price">Price: ${category.price}</p>

        </button>
        <div class="category-products-buttons">
        <button type="button" class="arrival__btn-cart category-btn" data-id="${category.id}"></button>
                <a href="" type="button" class="arrival__btn-product category-btn" data-id="${category.id}"></a>
        </div>
        </div>
        </li>`,
    );
  });
};
const closeCategories = () => {
  refs.categoriesOverlay.classList.remove('visible');
  refs.categoriesProductsList.innerHTML = '';
};

export { openCategories, closeCategories };
