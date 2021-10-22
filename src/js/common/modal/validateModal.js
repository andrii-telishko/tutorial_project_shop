import refs from '../refs';

const validateModalForm = () => {
  const validInputs = [...refs.modalInput].filter(
    input => input.validity.valid,
  );

  if (validInputs.length === 2) {
    refs.modalSubmitBtn.removeAttribute('disabled');
  } else {
    refs.modalSubmitBtn.setAttribute('disabled', true);
  }
};

export default validateModalForm;
