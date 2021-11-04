import './styles/main.scss';
import 'normalize.css';
import './js/common/modal/modal';
import './js/index/slider';

import refs from './js/common/refs';
import openMobileMenu from './js/index/burger';
import init from './js/index/init';
import choosingCard from './js/index/chooseProductCard';
import openRestCategories from './js/index/openRestCategories';
import closeRestCategories from './js/index/closeRestCategories';
import searchProducts from './js/index/searchProducts';
import closeSearchContainer from './js/index/closeSearchContainer';
import { openCartMenu, closeCartMenu } from './js/common/sidebar';
import incrementProductsOnMainPage from './js/index/incrementProductsOnMainPage';
import deleteProductsOnMainPage from './js/index/deleteProductsOnMainPage';
import addToCartOnMainPage from './js/index/addToCartFromMainPage';
import { coupons } from './js/cart/coupons';
import { setStorageItem } from './js/common/utils';

window.addEventListener('DOMContentLoaded', init);

setStorageItem('coupons', coupons);

refs.menuBtn.addEventListener('click', openMobileMenu);
refs.featureSection.addEventListener('click', choosingCard);
refs.featuresCard.addEventListener('click', addToCartOnMainPage);
refs.arrivalList.addEventListener('click', addToCartOnMainPage);
refs.popularList.addEventListener('click', addToCartOnMainPage);
refs.categoriesList.addEventListener('click', openRestCategories);
refs.cartOverlay.addEventListener('click', closeRestCategories);
refs.mainSearchInput.addEventListener('input', searchProducts);
refs.searchBackdrop.addEventListener('click', closeSearchContainer);
window.addEventListener('keydown', closeSearchContainer);
refs.searchList.addEventListener('click', addToCartOnMainPage);
refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartSidebarList.addEventListener('click', incrementProductsOnMainPage);
refs.cartSidebarList.addEventListener('click', deleteProductsOnMainPage);
