import { getStorageItem } from '../common/utils';
import refs from '../common/refs';
import reviewItem from '../../templates/product-page/reviewItem.hbs';
import productRating from './productRating';

const renderReviews = () => {
  const id = window.location.search.split('').slice(4).join('');
  let storage = getStorageItem(id);

  if (storage.length === 0) {
    refs.reviewList.innerHTML = '<h4>There is no reviews yet</h4>';
  } else {
    refs.reviewList.innerHTML = reviewItem(storage);
    productRating(storage);
  }
};

export default renderReviews;
