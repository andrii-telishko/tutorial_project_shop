import refs from '../../common/refs';

const openRestCategories = e => {
  if (
    e.target.nodeName === 'BUTTON' ||
    e.target.parentElement.nodeName === 'BUTTON'
  ) {
    refs.cartOverlay.classList.add('show');
    refs.restCategories.classList.add('open');
    refs.cartOverlay.classList.remove('is-hidden');
    refs.restCategories.classList.remove('is-hidden');
  }
};

export default openRestCategories;
