import './styles/main.scss';
import 'normalize.css';
import './js/common/modal/modal';
import './js/index/slider';

import refs from './js/common/refs';
import openMobileMenu from './js/index/burger';
import init from './js/index/init';
import choosingCard from './js/index/chooseProductCard';
import addToCart from './js/common/addToCart';
import openRestCategories from './js/index/openRestCategories';
import closeRestCategories from './js/index/closeRestCategories';
import searchProducts from './js/index/searchProducts';
import closeSearchContainer from './js/index/closeSearchContainer';
import { openCartMenu, closeCartMenu } from './js/common/sidebar';
import incrementProducts from './js/common/incrementProducts';
import deleteProduct from './js/common/deleteProduct';

window.addEventListener('DOMContentLoaded', init);

refs.menuBtn.addEventListener('click', openMobileMenu);
refs.featureSection.addEventListener('click', choosingCard);
refs.featuresCard.addEventListener('click', addToCart);
refs.arrivalList.addEventListener('click', addToCart);
refs.popularList.addEventListener('click', addToCart);
refs.categoriesList.addEventListener('click', openRestCategories);
refs.cartOverlay.addEventListener('click', closeRestCategories);
refs.mainSearchInput.addEventListener('input', searchProducts);
refs.searchBackdrop.addEventListener('click', closeSearchContainer);
window.addEventListener('keydown', closeSearchContainer);
refs.searchList.addEventListener('click', addToCart);
refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartSidebarList.addEventListener('click', incrementProducts);
refs.cartSidebarList.addEventListener('click', deleteProduct);
