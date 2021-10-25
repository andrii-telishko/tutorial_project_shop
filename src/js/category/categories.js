import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';
import '../common/modal/modal';

import renderCategory from './renderCategory';
import initCategories from '../index/initCategories';
import openRestCategories from '../index/openRestCategories';
import closeRestCategories from '../index/closeRestCategories';
import refs from '../common/refs';
import addToCart from '../common/addToCart';

window.addEventListener('DOMContentLoaded', renderCategory);

initCategories();

refs.categoriesList.addEventListener('click', openRestCategories);
refs.cartOverlay.addEventListener('click', closeRestCategories);
refs.productsList.addEventListener('click', addToCart);
