const validateFooterInput = e => {
  if (e.target.validity.patternMismatch && e.target.value.length > 0) {
    e.target.setCustomValidity('');
  } else {
    e.target.setCustomValidity('e-mail address is not valid');
  }
};

export default validateFooterInput;
