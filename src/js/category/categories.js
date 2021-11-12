import '../../styles/main.scss';
import 'normalize.css';
import '../common/modal/modal';

import renderCategory from './renderCategory';
import initCategories from '../index/initCategories';
import openRestCategories from '../index/openRestCategories';
import closeRestCategories from '../index/closeRestCategories';
import refs from '../common/refs';
import addToCartOnCategoryPage from './addToCartOnCategoryPage';
import { openCartMenu, closeCartMenu } from '../common/sidebar';
import { initCart } from '../common/init';
import incrementProductsOnCategoryPage from './incrementProductsOnCategoryPage';
import deleteProductsOnCategoryPage from './deleteProductsOnCategoryPage';
import validateFooterInput from '../common/validateFooterInput';

window.addEventListener('DOMContentLoaded', renderCategory);

initCategories();

initCart();

refs.categoriesList.addEventListener('click', openRestCategories);
refs.cartOverlay.addEventListener('click', closeRestCategories);
refs.productsList.addEventListener('click', addToCartOnCategoryPage);
refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartSidebarList.addEventListener('click', incrementProductsOnCategoryPage);
refs.cartSidebarList.addEventListener('click', deleteProductsOnCategoryPage);
refs.footerInput.addEventListener('input', validateFooterInput);
