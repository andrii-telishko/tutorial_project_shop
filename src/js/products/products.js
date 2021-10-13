import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';
import '../common/pagination';

import refs from '../common/refs';
import addToCart from '../common/addToCart';
import { store } from '../common/store';
import pagination from '../common/pagination';

pagination(store);

refs.totalProductsInfo.textContent = `Viewing 24 of ${store.length} products`;

refs.productsList.addEventListener('click', addToCart);
