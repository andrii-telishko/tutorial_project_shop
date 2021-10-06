import './styles/main.scss';
import 'normalize.css';

import refs from './js/common/refs';
import { closeCartMenu, openCartMenu } from './js/common/sidebar';

import renderProductsList from './js/products/renderProductsList';
('./js/products/renderProductsList');

// window.addEventListener('DomContentLoaded', renderProductsList);
renderProductsList();

refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartBtn.addEventListener('click', openCartMenu);
