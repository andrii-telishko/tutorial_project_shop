import refs from '../../common/refs';

const enableReviewForm = () => {
  const emptyInput = [...refs.reviewFormInputs].find(
    input => input.value === '',
  );

  const checkedInput = [...refs.reviewInputs].find(item => item.checked);

  if (!emptyInput && checkedInput) {
    refs.reviewFormButton.removeAttribute('disabled');
  }
};

export default enableReviewForm;
