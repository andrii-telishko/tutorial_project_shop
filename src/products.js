import './styles/main.scss';
import 'normalize.css';
import './js/common/sidebar';

import renderProductsList from './js/products/renderProductsList';
import refs from './js/common/refs';
import addToCart from './js/common/addToCart';

renderProductsList();

refs.productsList.addEventListener('click', addToCart);
refs.priceFilter.addEventListener('input', e => {
  refs.priceRange.style.width = e.target.value + '%';
});
refs.priceRange.addEventListener('input', e => {
  e.target.style.width = priceFilter.value + '%';
});
