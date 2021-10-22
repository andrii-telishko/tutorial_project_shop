import refs from '../common/refs';

const openRestCategories = e => {
  if (
    e.target.nodeName === 'BUTTON' ||
    e.target.parentElement.nodeName === 'BUTTON'
  ) {
    refs.cartOverlay.classList.add('show');
    refs.restCategories.classList.add('open');
  }
};

export default openRestCategories;
