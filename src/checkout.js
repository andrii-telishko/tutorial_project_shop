import './styles/main.scss';
import 'normalize.css';
import './js/checkout/masks';
import refs from './js/refs';
import changePaymentForm from './js/checkout/changePaymentForm';
import enableSubmitBtn from './js/checkout/formValidation';

refs.paymentMethodForm.addEventListener('click', changePaymentForm);
refs.form.addEventListener('change', enableSubmitBtn);
