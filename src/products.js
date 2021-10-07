import './styles/main.scss';
import 'normalize.css';
import './js/common/sidebar';
import './js/products/filters';

import renderProductsList from './js/products/renderProductsList';
import refs from './js/common/refs';
import addToCart from './js/common/addToCart';
import { store } from './js/common/store';
import renderCompanies from './js/products/renderCompanies';
import renderPriceValues from './js/products/renderPriceValues';

renderProductsList(store);

renderCompanies(store);

renderPriceValues(store);

refs.productsList.addEventListener('click', addToCart);
