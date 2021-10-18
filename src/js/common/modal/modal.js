import refs from '../refs';
import validateModalForm from './validateModal';
import modalSubmit from './modalSubmit';
import { openModal, closeModal } from './toggleModal';

refs.modalForm.addEventListener('input', validateModalForm);

refs.modalForm.addEventListener('submit', modalSubmit);

refs.modalOpenBtn.addEventListener('click', openModal);

refs.modalCloseBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModal);
