import refs from '../common/refs';
// import { store } from '../common/store';
import companiesFilterBtn from '../common/companiesFilteredButtons';
import {
  errorFn,
  renderFilteredProducts,
  topScroll,
} from '../common/filterFunctions';

const filters = store => {
  let commonFilter = store;

  refs.searchFilter.addEventListener('input', e => {
    refs.productsList.innerHTML = '';
    const { value } = e.target;
    if (value) {
      const filteredStore = commonFilter.filter(product => {
        const { name } = product;
        if (name.toLowerCase().includes(value.toLowerCase())) {
          return product;
        }
      });
      if (filteredStore.length === 0) {
        errorFn();
      } else {
        renderFilteredProducts(filteredStore);
      }
    } else {
      renderFilteredProducts(commonFilter);
    }
  });

  refs.companiesFilter.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      refs.productsList.innerHTML = '';
      refs.searchFilter.value = '';
      const companiesFilterButtons = companiesFilterBtn();
      companiesFilterButtons.map(item => {
        if (item.classList.contains('current')) {
          item.classList.remove('current');
          return;
        }
      });

      e.target.classList.add('current');

      if (e.target.textContent === 'All') {
        commonFilter = store;
        renderFilteredProducts(commonFilter);
      } else {
        const filteredProductsByCompanies = store.filter(product => {
          const { manufacturer } = product;
          if (manufacturer === e.target.textContent) {
            return product;
          }
        });

        renderFilteredProducts(filteredProductsByCompanies);
        commonFilter = filteredProductsByCompanies;
      }
      topScroll();
    } else {
      return;
    }
  });

  refs.priceFilter.addEventListener('change', () => {
    let priceStore = [];
    refs.productsList.innerHTML = '';

    const checkedInput = [...refs.priceInput].filter(input => input.checked);

    if (checkedInput.length === 0 || checkedInput.length === 4) {
      renderFilteredProducts(commonFilter);
      topScroll();
    } else {
      checkedInput.forEach(input => {
        if (input.dataset.value === '10') {
          commonFilter.forEach(product => {
            if (product.price <= 10) {
              priceStore.push(product);
            }
          });
        } else if (input.dataset.value === '50') {
          commonFilter.forEach(product => {
            if (product.price >= 50) {
              priceStore.push(product);
            }
          });
        } else {
          const minPrice = input.dataset.value.split('').slice(0, 2).join('');
          const maxPrice = input.dataset.value.split('').slice(3).join('');

          commonFilter.forEach(product => {
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
  });
};

export default filters;
