import refs from '../common/refs';
import { store } from '../common/store';
import renderProductsList from './renderProductsList';

refs.searchFilter.addEventListener('input', e => {
  refs.productsList.innerHTML = '';
  const { value } = e.target;
  if (value) {
    const filteredStore = store.filter(product => {
      const { name } = product;
      if (name.toLowerCase().includes(value.toLowerCase())) {
        return product;
      }
    });
    renderProductsList(filteredStore);
    if (filteredStore.length === 0) {
      refs.productsList.innerHTML = `<h2 class="error-message">Sorry, there is no games, you try to find</h2>`;
    }
  } else {
    renderProductsList(store);
  }
});

refs.companiesFilter.addEventListener('click', e => {
  refs.productsList.innerHTML = '';
  if (e.target.textContent === 'All') {
    renderProductsList(store);
  } else {
    const filteredProductsByCompanies = store.filter(product => {
      const { manufacturer } = product;
      if (manufacturer === e.target.textContent) {
        return product;
      }
    });
    renderProductsList(filteredProductsByCompanies);
  }

  window.scrollTo({
    top: 120,
    behavior: 'smooth',
  });
});

refs.priceFilter.addEventListener('input', e => {
  refs.productsList.innerHTML = '';
  const { value } = e.target;
  const storePrices = store.map(({ price }) => price);
  const maxPrice = Math.max(...storePrices);
  const maxCeilPrice = Math.ceil(maxPrice);
  refs.priceValue.textContent = `Value: $${value}`;
  refs.priceRange.style.width = (value * 100) / maxCeilPrice + '%';

  const filteredStoreByPrice = store.filter(product => {
    const { price } = product;
    if (price <= value) {
      return product;
    }
  });
  renderProductsList(filteredStoreByPrice);
  if (filteredStoreByPrice.length === 0) {
    refs.productsList.innerHTML = `<h2 class="error-message">Sorry, there is no games, you try to find</h2>`;
  }
});
