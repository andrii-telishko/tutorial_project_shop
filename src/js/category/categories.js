import '../../styles/main.scss';
import 'normalize.css';
import '../common/modal/modal';

import renderCategory from './renderCategory';
import initCategories from '../index/initCategories';
import openRestCategories from '../index/openRestCategories';
import closeRestCategories from '../index/closeRestCategories';
import refs from '../common/refs';
import addToCart from '../common/addToCart';
import { openCartMenu, closeCartMenu } from '../common/sidebar';
import initCart from '../common/initCart';

window.addEventListener('DOMContentLoaded', renderCategory);

initCategories();

initCart();

refs.categoriesList.addEventListener('click', openRestCategories);
refs.cartOverlay.addEventListener('click', closeRestCategories);
refs.productsList.addEventListener('click', addToCart);
refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
