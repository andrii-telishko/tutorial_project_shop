const refs = {
  // main page

  menuBtn: document.querySelector('.burger-btn'),
  mobileMenu: document.querySelector('[data-menu]'),
  cartOverlay: document.querySelector('.cart-overlay'),
  featuresLeftList: document.querySelector('.left-list'),
  featuresRightList: document.querySelector('.right-list'),
  featuresCard: document.querySelector('.feature-section__main-card'),
  featureSection: document.querySelector('.feature-section__main-list'),
  arrivalList: document.querySelector('.arrival__list'),
  popularList: document.querySelector('.popular__list'),
  searchBackdrop: document.querySelector('.search-backdrop'),
  searchList: document.querySelector('.search-list'),
  mainSearchInput: document.querySelector('.main-search__input'),

  // checkout page

  cardForm: document.querySelector('.payment-card'),
  transferForm: document.querySelector('.payment-bank'),
  paypalForm: document.querySelector('.payment-paypal'),
  paymentMethodForm: document.querySelectorAll('.checkout-form__group'),
  buyerFormInput: document.querySelectorAll('.buyer-input'),
  submitBtn: document.querySelector('.checkout-form__submit-btn'),
  form: document.querySelector('.checkout-form'),
  cardInput: document.querySelectorAll('.card-input'),
  transferInput: document.querySelectorAll('.bank-input'),
  paypalInput: document.querySelectorAll('.paypal-input'),
  agreeCheckbox: document.querySelector('.agree-checkbox'),
  errors: document.querySelectorAll('.error'),
  radioBtnPaymentList: document.querySelectorAll('.radio-btn'),
  radioBtnBankList: document.querySelectorAll('.radio-bank-btn'),

  // cart sidebar

  sidebarBtn: document.querySelector('.sidebar-btn'),
  sidebarCart: document.querySelector('.cart'),
  cartBtn: document.querySelector('.cart-btn'),
  loader: document.querySelector('.loader'),
  cartItem: document.querySelector('.cart__item'),

  // products and categories pages

  productsList: document.querySelector('.products__list'),
  categoriesList: document.querySelector('.header__categories-list'),
  restCategories: document.querySelector('.rest-categories-list'),
  categoryTitle: document.querySelector('.category-title'),
  totalProductsInfo: document.querySelector('.total-products'),
  pagination: document.querySelector('.pagination-list'),
  searchFilter: document.querySelector('.search-input'),
  companiesFilter: document.querySelector('.companies-filter'),
  priceFilter: document.querySelector('.price-form'),
  priceInput: document.querySelectorAll('.price-input'),

  // modal

  modalInput: document.querySelectorAll('.modal-input'),
  modalForm: document.querySelector('.modal-form'),
  modalSubmitBtn: document.querySelector('.modal-submit-btn'),
  modalCloseBtn: document.querySelector('.modal-btn'),
  modalOpenBtn: document.querySelector('.login-button'),
  modalBackdrop: document.querySelector('.backdrop'),
  iconCross: document.querySelector('.modal-cross'),

  //product page

  productContainer: document.querySelector('.product'),
};

export default refs;
