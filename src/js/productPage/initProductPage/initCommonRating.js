import refs from '../../common/refs';
import { getStorageItem } from '../../common/utils';

const initCommonRatting = id => {
  const productContainerChildren = [...refs.productContainer.children];
  const productInfo =
    productContainerChildren[productContainerChildren.length - 1];

  const commonRatingElement = productInfo.children[2];

  const storage = getStorageItem(id);

  const ratings = storage.map(({ review_rating }) => +review_rating);

  let commonRating;

  if (ratings.length === 0) {
    commonRating = 0.0;
  } else {
    commonRating =
      ratings.reduce((sum, item) => {
        return sum + item;
      }, 0) / ratings.length;
    commonRating = (Math.round(commonRating * 100) / 100).toFixed(2);
  }

  commonRating = (Math.round(commonRating * 100) / 100).toFixed(2);

  commonRatingElement.innerHTML = commonRating;
};

export default initCommonRatting;
