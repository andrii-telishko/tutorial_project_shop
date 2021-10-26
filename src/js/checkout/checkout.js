import '../../styles/main.scss';
import 'normalize.css';
import './masks';

import refs from '../common/refs';
import changePaymentForm from './changePaymentForm';
import { enableSubmitBtn, errorShowFn } from './formValidation';
import handlerSubmit from './handlerSubmit';
import { openCartMenu, closeCartMenu } from '../common/sidebar';
import initCart from '../common/initCart';

initCart();

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

window.addEventListener('DOMContentLoaded', () => {
  refs.loader.setAttribute('style', 'display: none');
});

refs.form.addEventListener('submit', handlerSubmit);
refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
