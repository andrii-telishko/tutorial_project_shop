import { setStorageItem, getStorageItem, USER_IMG } from '../common/utils';
import refs from '../common/refs';

const submitReviewForm = e => {
  e.preventDefault();

  const id = window.location.search.split('').slice(4).join('');
  let storage = getStorageItem(id);

  const modalData = new FormData(e.target);
  const value = Object.fromEntries(modalData.entries());

  value.image = USER_IMG;

  storage.push(value);

  setStorageItem(id, storage);

  e.target.reset();

  refs.reviewFormButton.setAttribute('disabled', true);
};

export default submitReviewForm;
