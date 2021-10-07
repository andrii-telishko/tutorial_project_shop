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
