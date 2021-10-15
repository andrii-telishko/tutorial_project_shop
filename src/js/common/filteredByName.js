import { errorFn, renderFilteredProducts } from './filterFunctions';
import refs from './refs';
import { store } from './store';

const filteredByName = e => {
  refs.productsList.innerHTML = '';
  const { value } = e.target;
  if (value) {
    const filteredStore = store.filter(product => {
      const { name } = product;
      if (name.toLowerCase().includes(value.toLowerCase())) {
        return product;
      }
    });
    renderFilteredProducts(filteredStore);
    if (filteredStore.length === 0) {
      errorFn();
    }
  } else {
    renderFilteredProducts(store);
  }
};

export default filteredByName;
