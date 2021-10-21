import { setStorageItem, getStorageItem, USER_IMG } from '../common/utils';
import refs from '../common/refs';
import oneReview from '../../templates/product-page/oneReview.hbs';

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

  e.target.reset();

  refs.reviewFormButton.setAttribute('disabled', true);
};

export default submitReviewForm;
