import './styles/main.scss';
import 'normalize.css';
import './js/common/sidebar';
import './js/products/filters';

import renderProductsList from './js/products/renderProductsList';
import refs from './js/common/refs';
import addToCart from './js/common/addToCart';
import { store } from './js/common/store';

renderProductsList(store);

refs.productsList.addEventListener('click', addToCart);
refs.range.addEventListener('input', () => {
  refs.priceRange.style.width = refs.priceFilter.value + '%';
});
