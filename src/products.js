import './styles/main.scss';
import 'normalize.css';
import './js/common/sidebar';

import renderProductsList from './js/products/renderProductsList';
import refs from './js/common/refs';
import addToCart from './js/common/addToCart';

renderProductsList();

refs.productsList.addEventListener('click', addToCart);
