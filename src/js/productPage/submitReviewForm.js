import {
  setStorageItem,
  getStorageItem,
  USER_IMG,
  message,
} from '../common/utils';
import refs from '../common/refs';
import oneReview from '../../templates/product-page/oneReview.hbs';
import initCommonRatting from './initCommonRating';
import renderReviews from './renderReviews';

const submitReviewForm = e => {
  e.preventDefault();

  const id = window.location.search.split('').slice(4).join('');
  let storage = getStorageItem(id);

  const modalData = new FormData(e.target);
  const value = Object.fromEntries(modalData.entries());

  value.image = USER_IMG;

  storage.push(value);

  refs.reviewList.insertAdjacentHTML('beforeend', oneReview(value));

  const lastItem = refs.reviewList.children;
  const stars =
    lastItem[lastItem.length - 1].firstElementChild.lastElementChild
      .firstElementChild.nextElementSibling.children;

  [...stars].forEach((star, index) => {
    if (index < value.review_rating) {
      star.setAttribute('style', 'color: gold');
    }
  });

  setStorageItem(id, storage);

  initCommonRatting(id);

  renderReviews();

  e.target.reset();

  refs.reviewFormButton.setAttribute('disabled', true);

  refs.textArea.value = message;
};

export default submitReviewForm;
