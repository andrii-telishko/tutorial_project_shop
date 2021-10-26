import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';
import '../common/pagination';
import '../common/modal/modal';

import refs from '../common/refs';
import addToCart from '../common/addToCart';
import { store } from '../common/store';

import pagination from '../common/pagination';
import renderCompanies from '../common/renderCompanies';
import filters from '../common/filters/filters';

pagination(store);

refs.totalProductsInfo.textContent = `Viewing 24 of ${store.length} products`;

renderCompanies(store);

refs.loader.setAttribute('style', 'display:none');

filters(store);

refs.productsList.addEventListener('click', addToCart);
