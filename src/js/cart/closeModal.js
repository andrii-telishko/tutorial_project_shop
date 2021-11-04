import refs from '../common/refs';

const closeModal = e => {
  if (
    e.target === e.currentTarget ||
    e.code === 'Escape' ||
    e.target === refs.iconCross
  ) {
    refs.modalBackdrop.classList.add('is-hidden');
  }
};

export default closeModal;
