const refs = {
  menuBtn: document.querySelector('[data-menu-button]'),
  mobileMenu: document.querySelector('[data-menu]'),
  cardForm: document.querySelector('.payment-card'),
  transferForm: document.querySelector('.payment-bank'),
  paypalForm: document.querySelector('.payment-paypal'),
  paymentMethodForm: document.querySelectorAll('.checkout-form__group')[1],
  buyerFormInput: document.querySelectorAll('.buyer-input'),
  submitBtn: document.querySelector('.checkout-form__submit-btn'),
  form: document.querySelector('.checkout-form'),
  cardInput: document.querySelectorAll('.card-input'),
  transferInput: document.querySelectorAll('.bank-input'),
  paypalInput: document.querySelectorAll('.paypal-input'),
  agreeCheckbox: document.querySelector('.agree-checkbox'),
};

export default refs;
