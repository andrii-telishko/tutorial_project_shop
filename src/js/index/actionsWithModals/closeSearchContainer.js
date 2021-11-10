import refs from '../../common/refs';

const closeSearchContainer = e => {
  if (e.target === e.currentTarget || e.code === 'Escape') {
    refs.searchBackdrop.classList.add('is-hidden');
    refs.mainSearchInput.value = '';
  }
};

export default closeSearchContainer;
