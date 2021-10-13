import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';

import refs from '../common/refs';
import addToCart from '../common/addToCart';
import { store } from '../common/store';
import productsListTpl from '../../templates/common/productsList.hbs';

refs.productsList.innerHTML = productsListTpl(store);
refs.totalProductsInfo.textContent = `${store.length} Products`;

refs.productsList.addEventListener('click', addToCart);
