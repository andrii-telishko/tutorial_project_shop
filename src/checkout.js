import './styles/main.scss';
import 'normalize.css';
import './js/masks';

const radioBtn = document.querySelectorAll('.radio-btn');
const card = document.querySelector('.payment-card');
const transfer = document.querySelector('.payment-bank');
const paypal = document.querySelector('.payment-paypal');
const wrapper = document.querySelectorAll('.checkout-form__group');

const form = document.querySelector('.checkout-form');
// const card = document.querySelector('.payment-card');
const select = document.querySelectorAll('.checkout-form__select');
const buyerInput = document.querySelectorAll('.buyer-input');
const cardInput = document.querySelectorAll('.card-input');
const checkbox = document.querySelectorAll('.checkbox');
const error = document.querySelector('.error');
const btn = document.querySelector('.checkout-form__submit-btn');
const bankInput = document.querySelectorAll('.bank-input');
const paypalInput = document.querySelectorAll('.paypal-input');
console.log(select);
[...select].map(item => {
  [...item].map(item => console.log(item.value));
});

const resetInput = () => {
  return [...buyerInput].map(item => (item.value = ''));
};

wrapper[1].addEventListener('click', e => {
  if (!e.target.classList.contains('radio-btn')) {
    return;
  }

  if (e.target.value === 'credit_card') {
    card.removeAttribute('style');
    transfer.setAttribute('style', 'display: none');
    paypal.setAttribute('style', 'display: none');
    resetInput();
    btn.setAttribute('disabled', true);
  } else if (e.target.value === 'transfer') {
    card.setAttribute('style', 'display: none');
    transfer.removeAttribute('style');
    paypal.setAttribute('style', 'display: none');
    resetInput();
    btn.setAttribute('disabled', true);
  } else if (e.target.value === 'paypal') {
    card.setAttribute('style', 'display: none');
    transfer.setAttribute('style', 'display: none');
    paypal.removeAttribute('style');
    resetInput();
    btn.setAttribute('disabled', true);
  }
});

form.addEventListener('change', () => {
  const invalidInputBuyer = [...buyerInput].find(item => !item.validity.valid);
  const invalidInputCard = [...cardInput].find(item => !item.validity.valid);
  const invalidInputBank = [...bankInput].find(item => !item.validity.valid);
  const invalidInputPaypal = [...paypalInput].find(
    item => !item.validity.valid,
  );

  const invalidCard = !invalidInputBuyer && !invalidInputCard;
  const invalidBank = !invalidInputBuyer && !invalidInputBank;
  const invalidPaypal = !invalidInputBuyer && !invalidInputPaypal;

  if (invalidCard || invalidBank || invalidPaypal) {
    btn.removeAttribute('disabled');
  }
});
