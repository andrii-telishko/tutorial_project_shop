const form = document.querySelector('.checkout-form');
const card = document.querySelector('.payment-card');
const select = document.querySelectorAll('.checkout-form__select');
const buyerInput = document.querySelectorAll('.buyer-input');
const cardInput = document.querySelectorAll('.card-input');
const checkbox = document.querySelectorAll('.checkbox');
const error = document.querySelector('.error');
const btn = document.querySelector('.checkout-form__submit-btn');

// console.log(buyerInput);

form.addEventListener('change', () => {
  const invalidInputBuyer = [...buyerInput].find(item => !item.validity.valid);
  const invalidInputCard = [...cardInput].find(item => !item.validity.valid);

  if (!invalidInputBuyer && !invalidInputCard) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', true);
  }
});
