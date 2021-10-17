import refs from '../common/refs';

import companiesFilterBtn from '../common/companiesFilteredButtons';
import {
  errorFn,
  renderFilteredProducts,
  topScroll,
  findProductsByManufacturer,
  addClassOnButton,
  findProductsByPrice,
} from '../common/filterFunctions';

const filters = store => {
  let commonFilter = store;
  const companiesFilterButtons = companiesFilterBtn();

  refs.searchFilter.addEventListener('input', e => {
    refs.productsList.innerHTML = '';
    const { value } = e.target;

    if (value) {
      const filteredProducts = commonFilter.filter(product => {
        const { name } = product;
        if (name.includes(value)) {
          return product;
        }
      });
      if (filteredProducts.length > 0) {
        renderFilteredProducts(filteredProducts);
      } else {
        renderFilteredProducts(filteredProducts);
        errorFn();
      }
    } else {
      renderFilteredProducts(commonFilter);
    }
  });

  refs.companiesFilter.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      refs.productsList.innerHTML = '';
      refs.searchFilter.value = '';
      const company = e.target.textContent;
      const checkedInput = [...refs.priceInput].filter(input => input.checked);

      addClassOnButton(companiesFilterButtons, e.target);

      if (checkedInput.length === 0 || checkedInput.length === 4) {
        commonFilter = store;
      } else {
        commonFilter = findProductsByPrice(checkedInput, store);
      }

      if (company === 'All') {
        if (commonFilter.length > 0) {
          renderFilteredProducts(commonFilter);
        } else {
          renderFilteredProducts(commonFilter);
          errorFn();
        }
      } else {
        const companyFilter = findProductsByManufacturer(commonFilter, company);
        if (companyFilter.length > 0) {
          renderFilteredProducts(companyFilter);
          commonFilter = companyFilter;
        } else {
          renderFilteredProducts(companyFilter);
          errorFn();
        }
      }
      topScroll();
    } else {
      return;
    }
  });

  refs.priceFilter.addEventListener('change', () => {
    const checkedBtn = companiesFilterButtons.find(button =>
      button.classList.contains('current'),
    );
    const company = checkedBtn.textContent;

    refs.productsList.innerHTML = '';
    const checkedInput = [...refs.priceInput].filter(input => input.checked);

    if (company === 'All') {
      commonFilter = store;
    } else {
      commonFilter = findProductsByManufacturer(store, company);
    }

    if (checkedInput.length === 0 || checkedInput.length === 4) {
      renderFilteredProducts(commonFilter);
      topScroll();
    } else {
      const priceStore = findProductsByPrice(checkedInput, commonFilter);
      commonFilter = priceStore;
      if (commonFilter.length > 0) {
        renderFilteredProducts(commonFilter);

        topScroll();
      } else {
        renderFilteredProducts(commonFilter);

        errorFn();
        topScroll();
      }
    }
  });
};

export default filters;
