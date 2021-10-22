import refs from '../common/refs';

const closeRestCategories = () => {
  if (refs.restCategories.classList.contains('open')) {
    refs.cartOverlay.classList.remove('show');
    refs.restCategories.classList.remove('open');
  }
};

export default closeRestCategories;
