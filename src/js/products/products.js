
import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';



import refs from '../common/refs';
import addToCart from '../common/addToCart';
import { store } from '../common/store';

import pagination from '../common/pagination';
import renderCompanies from '../common/renderCompanies';
import filters from './filters';

pagination(store);

refs.totalProductsInfo.textContent = `Viewing 24 of ${store.length} products`;

renderCompanies(store);

filters(store);


refs.productsList.addEventListener('click', addToCart);
