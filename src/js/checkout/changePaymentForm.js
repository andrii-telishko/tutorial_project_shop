import refs from '../refs';

const changePaymentForm = e => {
  if (!e.target.classList.contains('radio-btn')) {
    return;
  }

  if (e.target.value === 'credit_card') {
    addingStylesFn(refs.cardForm, refs.transferForm, refs.paypalForm);
  } else if (e.target.value === 'transfer') {
    addingStylesFn(refs.transferForm, refs.cardForm, refs.paypalForm);
  } else if (e.target.value === 'paypal') {
    addingStylesFn(refs.paypalForm, refs.cardForm, refs.transferForm);
  }
};

const resetBuyerInput = () => {
  [...refs.buyerFormInput].map(item => (item.value = ''));
};

const addingStylesFn = (remove, addFirst, addSecond) => {
  remove.removeAttribute('style');
  addFirst.setAttribute('style', 'display: none');
  addSecond.setAttribute('style', 'display: none');

  resetBuyerInput();
  refs.submitBtn.setAttribute('disabled', true);
};

export default changePaymentForm;
