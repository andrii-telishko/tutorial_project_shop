import refs from '../common/refs';
import searchContainerList from '../../templates/main/searchContainerList.hbs';
import { store } from '../common/store';

const searchProducts = e => {
  const { value } = e.target;
  refs.searchBackdrop.classList.remove('is-hidden');
  refs.searchList.innerHTML = '';
  if (value) {
    const searchProducts = store.filter(product => {
      const { name } = product;
      if (name.toLowerCase().includes(value.toLowerCase())) {
        return product;
      }
    });

    if (searchProducts.length > 0) {
      refs.searchList.insertAdjacentHTML(
        'beforeend',
        searchContainerList(searchProducts),
      );
    } else {
      refs.searchList.innerHTML = '<h5>No Games with such Title</h5>';
    }
  } else {
    refs.searchBackdrop.classList.add('is-hidden');
    refs.searchList.innerHTML = '';
  }
};

export default searchProducts;
