import refs from '../common/refs';

const changePaymentForm = e => {
  if (!e.target.classList.contains('radio-btn')) {
    return;
  }

  if (e.target.value === 'credit_card') {
    addingStylesFn(refs.cardForm, refs.transferForm, refs.paypalForm);
    resetForm(refs.transferInput, refs.paypalInput);
  } else if (e.target.value === 'transfer') {
    addingStylesFn(refs.transferForm, refs.cardForm, refs.paypalForm);
    resetForm(refs.cardInput, refs.paypalInput);
  } else if (e.target.value === 'paypal') {
    addingStylesFn(refs.paypalForm, refs.cardForm, refs.transferForm);
    resetForm(refs.transferInput, refs.cardInput);
  }
};

const resetForm = (firstElement, secondElement) => {
  [...firstElement].map(item => (item.value = ''));
  [...secondElement].map(item => (item.value = ''));
};

const addingStylesFn = (remove, addFirst, addSecond) => {
  remove.removeAttribute('style');
  addFirst.setAttribute('style', 'display: none');
  addSecond.setAttribute('style', 'display: none');

  const checkedBankBtn = [...refs.radioBtnBankList].find(
    button => button.checked,
  );

  if (checkedBankBtn) {
    checkedBankBtn.checked = false;
  }

  refs.submitBtn.setAttribute('disabled', true);
};

const checkedBankBtn = [...refs.radioBtnBankList].find(
  button => button.checked,
);

export default changePaymentForm;
