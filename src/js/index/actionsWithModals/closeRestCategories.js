import refs from '../../common/refs';

const closeRestCategories = e => {
  if (e.target === e.currentTarget || e.code === 'Escape')
    if (refs.restCategories.classList.contains('open')) {
      refs.cartOverlay.classList.remove('show');
      refs.restCategories.classList.remove('open');
      refs.cartOverlay.classList.add('is-hidden');
      refs.restCategories.classList.add('is-hidden');
    }
};

export default closeRestCategories;
