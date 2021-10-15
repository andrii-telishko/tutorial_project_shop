import { topScroll, renderFilteredProducts, errorFn } from './filterFunctions';
import refs from './refs';
import { store } from './store';

const filteredByPrice = () => {
  let priceStore = [];
  refs.productsList.innerHTML = '';

  const checkedInput = [...refs.priceInput].filter(input => input.checked);

  if (checkedInput.length === 0 || checkedInput.length === 4) {
    renderFilteredProducts(store);
    topScroll();
  } else {
    checkedInput.forEach(input => {
      if (input.dataset.value === '10') {
        store.forEach(product => {
          if (product.price <= 10) {
            priceStore.push(product);
          }
        });
      } else if (input.dataset.value === '50') {
        store.forEach(product => {
          if (product.price >= 50) {
            priceStore.push(product);
          }
        });
      } else {
        const minPrice = input.dataset.value.split('').slice(0, 2).join('');
        const maxPrice = input.dataset.value.split('').slice(3).join('');

        store.forEach(product => {
          if (product.price >= minPrice && product.price <= maxPrice) {
            priceStore.push(product);
          }
        });
      }

      if (priceStore.length > 0) {
        renderFilteredProducts(priceStore);

        topScroll();
      } else {
        renderFilteredProducts(priceStore);

        errorFn();
        topScroll();
      }
    });
  }
};

export default filteredByPrice;
