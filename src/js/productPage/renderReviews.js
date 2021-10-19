import { getStorageItem } from '../common/utils';
import refs from '../common/refs';
import reviewItem from '../../templates/product-page/reviewItem.hbs';

const renderReviews = () => {
  const id = window.location.search.split('').slice(4).join('');
  let storage = getStorageItem(id);

  refs.reviewList.insertAdjacentHTML('beforeend', reviewItem(storage));
};

export default renderReviews;
