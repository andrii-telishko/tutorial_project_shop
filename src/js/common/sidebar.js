import refs from './refs';
import { getStorageItem } from './utils';
import cartSidebarItem from '../../templates/common/cartSidebarItem.hbs';

const closeCartMenu = () => {
  const expanded =
    refs.sidebarBtn.getAttribute('aria-expanded') === 'true' || false;

  refs.sidebarCart.classList.remove('show');

  refs.cartOverlay.classList.remove('show');
  refs.sidebarCart.classList.add('is-hidden');
  refs.cartOverlay.classList.add('is-hidden');
  refs.sidebarBtn.setAttribute('aria-expanded', !expanded);
  refs.cartSidebarList.innerHTML = '';
};

const openCartMenu = () => {
  refs.sidebarCart.classList.add('show');
  refs.cartOverlay.classList.add('show');
  refs.sidebarCart.classList.remove('is-hidden');
  refs.cartOverlay.classList.remove('is-hidden');

  refs.cartSidebarList.insertAdjacentHTML(
    'beforeend',
    cartSidebarItem(getStorageItem('cart')),
  );
};

export { closeCartMenu, openCartMenu };
