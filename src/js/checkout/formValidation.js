import refs from '../refs';

const enableSubmitBtn = () => {
  const invalidInputBuyer = [...refs.buyerFormInput].find(
    item => !item.validity.valid,
  );
  const invalidInputCard = [...refs.cardInput].find(
    item => !item.validity.valid,
  );
  const invalidInputTransfer = [...refs.transferInput].find(
    item => !item.validity.valid,
  );
  const invalidInputPaypal = [...refs.paypalInput].find(
    item => !item.validity.valid,
  );

  const validCard = !invalidInputBuyer && !invalidInputCard;
  const validBank = !invalidInputBuyer && !invalidInputTransfer;
  const validPaypal =
    !invalidInputBuyer && !invalidInputPaypal && refs.agreeCheckbox.checked;

  if (validCard || validBank || validPaypal) {
    refs.submitBtn.removeAttribute('disabled');
  } else {
    refs.submitBtn.setAttribute('disabled', true);
  }
};

const errorShowFn = (e, message) => {
  const actualError = [...refs.errors].find(
    error => error.previousElementSibling === e.target,
  );

  if (!actualError) {
    return;
  } else {
    if (e.target.validity.valid) {
      actualError.textContent = '';
    } else {
      actualError.textContent = message;
    }
  }
};

export { enableSubmitBtn, errorShowFn };
