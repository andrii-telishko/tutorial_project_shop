import refs from '../refs';

import companiesFilterBtn from './companiesFilteredButtons';
import {
  errorFn,
  renderFilteredProducts,
  topScroll,
  findProductsByManufacturer,
  addClassOnButton,
  findProductsByPrice,
} from './filterFunctions';

const filters = store => {
  let commonFilter = store;
  const companiesFilterButtons = companiesFilterBtn();

  refs.searchFilter.addEventListener('input', e => {
    refs.productsList.innerHTML = '';
    const { value } = e.target;

    if (value) {
      const filteredProducts = commonFilter.filter(product => {
        const { name } = product;
        if (name.toLowerCase().includes(value.toLowerCase())) {
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
      // refs.selectForm.reset();
      const company = e.target.textContent;
      const checkedInput = [...refs.priceInput].filter(input => input.checked);

      addClassOnButton(companiesFilterButtons, e.target);

      let sortingData = [];

      if (refs.select.value === 'new') {
        const updatingStore = [...store].sort(
          (firstProduct, secondProduct) =>
            secondProduct.updatedAt - firstProduct.updatedAt,
        );

        sortingData = updatingStore;
      } else if (refs.select.value === 'old') {
        const updatingStore = [...store].sort(
          (firstProduct, secondProduct) =>
            firstProduct.updatedAt - secondProduct.updatedAt,
        );
        sortingData = updatingStore;
      } else {
        sortingData = store;
      }

      if (checkedInput.length === 0 || checkedInput.length === 4) {
        commonFilter = sortingData;
      } else {
        commonFilter = findProductsByPrice(checkedInput, sortingData);
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
    refs.searchFilter.value = '';

    refs.productsList.innerHTML = '';
    const checkedInput = [...refs.priceInput].filter(input => input.checked);

    let sortingData = [];

    if (refs.select.value === 'new') {
      const updatingStore = [...store].sort(
        (firstProduct, secondProduct) =>
          secondProduct.updatedAt - firstProduct.updatedAt,
      );

      sortingData = updatingStore;
    } else if (refs.select.value === 'old') {
      const updatingStore = [...store].sort(
        (firstProduct, secondProduct) =>
          firstProduct.updatedAt - secondProduct.updatedAt,
      );
      sortingData = updatingStore;
    } else {
      sortingData = store;
    }

    if (company === 'All') {
      commonFilter = sortingData;
    } else {
      commonFilter = findProductsByManufacturer(sortingData, company);
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

  refs.select.addEventListener('change', e => {
    const checkedBtn = companiesFilterButtons.find(button =>
      button.classList.contains('current'),
    );
    const company = checkedBtn.textContent;

    const checkedInput = [...refs.priceInput].filter(input => input.checked);

    refs.productsList.innerHTML = '';
    refs.searchFilter.value = '';

    let filteredCompanies = [];

    if (company === 'All') {
      filteredCompanies = store;
    } else {
      filteredCompanies = findProductsByManufacturer(store, company);
    }

    if (checkedInput.length === 0 || checkedInput.length === 4) {
      commonFilter = filteredCompanies;
    } else {
      commonFilter = findProductsByPrice(checkedInput, filteredCompanies);
    }

    if (e.target.value === 'new') {
      const updatingStore = [...commonFilter].sort(
        (firstProduct, secondProduct) =>
          secondProduct.updatedAt - firstProduct.updatedAt,
      );
      renderFilteredProducts(updatingStore);
    } else if (e.target.value === 'old') {
      const updatingStore = [...commonFilter].sort(
        (firstProduct, secondProduct) =>
          firstProduct.updatedAt - secondProduct.updatedAt,
      );
      renderFilteredProducts(updatingStore);
    } else {
      renderFilteredProducts(commonFilter);
    }
  });
};

export default filters;
