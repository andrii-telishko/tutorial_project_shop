import refs from '../refs';

const openModal = () => {
  refs.modalBackdrop.classList.remove('is-hidden');
};

const closeModal = e => {
  if (
    e.target === e.currentTarget ||
    e.code === 'Escape' ||
    e.target === refs.iconCross
  ) {
    refs.modalBackdrop.classList.add('is-hidden');
    refs.modalForm.reset();
  }
};

export { openModal, closeModal };
