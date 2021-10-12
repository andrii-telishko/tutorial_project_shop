import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';

import renderProductsList from './renderProductsList';
import refs from '../common/refs';
import addToCart from '../common/addToCart';
import { store } from '../common/store';

renderProductsList(store);

refs.productsList.addEventListener('click', addToCart);
