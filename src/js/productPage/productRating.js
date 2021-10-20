import refs from '../common/refs';

const productRating = storage => {
  const starsList = [...refs.reviewList.children].map(item => {
    return item.firstElementChild.lastElementChild.firstElementChild
      .nextElementSibling.children;
  });

  storage.forEach((product, productIndex) => {
    [...starsList].forEach((stars, starsIndex) => {
      if (productIndex === starsIndex) {
        [...stars].forEach((star, index) => {
          if (index < product.review_rating) {
            star.setAttribute('style', 'color: gold');
          }
        });
      }
    });
  });
};

export default productRating;
