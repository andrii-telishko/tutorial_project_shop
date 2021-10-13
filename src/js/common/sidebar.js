import refs from './refs';

const closeCartMenu = () => {
  const expanded =
    refs.sidebarBtn.getAttribute('aria-expanded') === 'true' || false;

  refs.sidebarCart.classList.remove('show');
  refs.cartOverlay.classList.remove('show');
  refs.sidebarBtn.setAttribute('aria-expanded', !expanded);
  refs.cartItem.innerHTML = '';
};

export const openCartMenu = () => {
  refs.sidebarCart.classList.add('show');
  refs.cartOverlay.classList.add('show');
};

refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartBtn.addEventListener('click', openCartMenu);
