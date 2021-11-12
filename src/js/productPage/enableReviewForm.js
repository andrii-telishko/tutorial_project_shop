import refs from '../common/refs';

const enableReviewForm = () => {
  const emptyInput = [...refs.reviewFormInputs].find(
    input => input.value === '',
  );
  const checkedStar = [...refs.reviewStars].find(item => item.checked);

  if (!emptyInput && checkedStar) {
    refs.reviewFormButton.removeAttribute('disabled');
  }
};

export default enableReviewForm;
