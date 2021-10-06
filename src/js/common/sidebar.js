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

const addToCart = e => {
  if (e.target.nodeName === 'BUTTON') {
    openCartMenu();
    console.log(e.target.dataset.id);
  } else {
    openCartMenu();
    console.log(e.target.parentElement.dataset.id);
  }
};

export { closeCartMenu, openCartMenu, addToCart };
