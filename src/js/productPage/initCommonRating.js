import refs from '../common/refs';
import { getStorageItem } from '../common/utils';

const initCommonRatting = id => {
  const productContainerChildren = [...refs.productContainer.children];
  const productInfo =
    productContainerChildren[productContainerChildren.length - 1];
  const commonRatingElement = productInfo.firstElementChild.nextElementSibling;

  const storage = getStorageItem(id);

  const ratings = storage.map(({ review_rating }) => +review_rating);

  const commonRating =
    ratings.reduce((sum, item) => {
      return sum + item;
    }, 0) / ratings.length;

  if (storage.length === 0) {
    commonRatingElement.setAttribute('style', 'display: none');
  }
  {
    commonRatingElement.innerHTML = commonRating;
  }
};

export default initCommonRatting;
