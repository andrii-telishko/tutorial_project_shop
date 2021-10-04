import refs from './refs';

const closeCartMenu = () => {
  const expanded =
    refs.sidebarBtn.getAttribute('aria-expanded') === 'true' || false;

  refs.sidebarCart.classList.remove('show');
  refs.cartOverlay.classList.remove('show');
  refs.sidebarBtn.setAttribute('aria-expanded', !expanded);
  refs.cartItem.innerHTML = '';
};

const openCartMenu = () => {
  refs.sidebarCart.classList.add('show');
  refs.cartOverlay.classList.add('show');
};

export { closeCartMenu, openCartMenu };
