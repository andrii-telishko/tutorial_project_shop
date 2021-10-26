import refs from '../common/refs';

const enableReviewForm = () => {
  const emptyInput = [...refs.reviewFormInputs].find(
    input => input.value === '',
  );

  if (!emptyInput) {
    refs.reviewFormButton.removeAttribute('disabled');
  }
};

export default enableReviewForm;
