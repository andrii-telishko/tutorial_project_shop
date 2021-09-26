import './js/slider';
// import './js/radio-checked';
// import './js/formValidation';
import './styles/main.scss';
import 'normalize.css';

const wrapper = document.querySelectorAll('.checkout-form__group');

const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
});

wrapper[1].addEventListener('click', e => {
  if (e.target.value === 'credit_card') {
    card.classList.remove('visually-hidden');
    transfer.classList.add('visually-hidden');
    paypal.classList.add('visually-hidden');
  } else if (e.target.value === 'transfer') {
    card.classList.add('visually-hidden');
    transfer.classList.remove('visually-hidden');
    paypal.classList.add('visually-hidden');
  } else if (e.target.value === 'paypal') {
    card.classList.add('visually-hidden');
    transfer.classList.add('visually-hidden');
    paypal.classList.remove('visually-hidden');
  }
});
