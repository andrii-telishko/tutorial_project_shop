import { openCartMenu } from './sidebar';
import cartSidebarItem from '../../templates/common/cartSidebarItem.hbs';
import { store } from './store';
import refs from './refs';
import { getStorageItem } from './utils';

const addToCart = e => {
  const id = e.target.dataset.id || e.target.parentNode.dataset.id;

  if (refs.searchBackdrop) {
    if (!refs.searchBackdrop.classList.contains('is-hidden')) {
      refs.searchBackdrop.classList.add('is-hidden');
      refs.mainSearchInput.value = '';
    }
  }

  if (
    e.target.nodeName === 'BUTTON' ||
    e.target.textContent === 'Add to Cart'
  ) {
    openCartMenu();
    const product = store.find(product => product.id === +id);

    if (product) {
      refs.cartSidebarList.insertAdjacentHTML(
        'beforeend',
        cartSidebarItem(product),
      );
    } else {
      const productInCategory = getStorageItem('category').find(
        product => product.id === +id,
      );

      refs.cartSidebarList.insertAdjacentHTML(
        'beforeend',
        cartSidebarItem(productInCategory),
      );
    }
  }
};

export default addToCart;
