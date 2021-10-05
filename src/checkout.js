import './styles/main.scss';
import 'normalize.css';
import './js/checkout/masks';
import refs from './js/refs';
import changePaymentForm from './js/checkout/changePaymentForm';
import { enableSubmitBtn, errorShowFn } from './js/checkout/formValidation';
import { closeCartMenu, openCartMenu } from './js/sidebar';

refs.paymentMethodForm[1].addEventListener('click', changePaymentForm);
refs.form.addEventListener('input', enableSubmitBtn);
refs.paymentMethodForm[0].addEventListener('input', e => {
  if (e.target.hasAttribute('id')) {
    errorShowFn(e, 'Please, enter your name, using only letters');
  } else {
    errorShowFn(e, 'Please, enter your city, using only letters');
  }
});
refs.cardForm.addEventListener('input', e => {
  errorShowFn(e, 'Please, enter name from card using only letters');
});
refs.transferForm.addEventListener('input', e => {
  errorShowFn(e, 'Please, enter name of receiver, using only letters');
});
refs.paypalForm.addEventListener('input', e => {
  errorShowFn(e, 'Please, enter name of receiver, using only letters');
});

refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartBtn.addEventListener('click', openCartMenu);

window.addEventListener('DOMContentLoaded', () => {
  refs.loader.setAttribute('style', 'display: none');
});

refs.cartItemCount.textContent = JSON.parse(
  localStorage.getItem('cart'),
).length;
