import './js/slider';
// import './radio-checked';
// import './js/formValidation';
import './styles/main.scss';
import 'normalize.css';
// import './js/burger';

// const radioBtn = document.querySelectorAll('.radio-btn');
// const card = document.querySelector('.payment-card');
// const transfer = document.querySelector('.payment-bank');
// const paypal = document.querySelector('.payment-paypal');
// const wrapper = document.querySelectorAll('.checkout-form__group');

// const form = document.querySelector('.checkout-form');
// // const card = document.querySelector('.payment-card');
// const select = document.querySelectorAll('.checkout-form__select');
// const buyerInput = document.querySelectorAll('.buyer-input');
// const cardInput = document.querySelectorAll('.card-input');
// const checkbox = document.querySelectorAll('.checkbox');
// const error = document.querySelector('.error');
// const btn = document.querySelector('.checkout-form__submit-btn');

const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

// wrapper[1].addEventListener('click', e => {
//   if (e.target.value === 'credit_card') {
//     card.classList.remove('visually-hidden');
//     transfer.classList.add('visually-hidden');
//     paypal.classList.add('visually-hidden');
//   } else if (e.target.value === 'transfer') {
//     card.classList.add('visually-hidden');
//     transfer.classList.remove('visually-hidden');
//     paypal.classList.add('visually-hidden');
//   } else if (e.target.value === 'paypal') {
//     card.classList.add('visually-hidden');
//     transfer.classList.add('visually-hidden');
//     paypal.classList.remove('visually-hidden');
//   }
// });

// form.addEventListener('change', () => {
//   const invalidInputBuyer = [...buyerInput].find(item => !item.validity.valid);
//   const invalidInputCard = [...cardInput].find(item => !item.validity.valid);

//   if (!invalidInputBuyer && !invalidInputCard) {
//     btn.removeAttribute('disabled');
//   } else {
//     btn.setAttribute('disabled', true);
//   }
// });

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
});
