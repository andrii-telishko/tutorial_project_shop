import './styles/main.scss';
import 'normalize.css';
import './js/index/slider';
import './js/common/sidebar';
import './js/common/modal/modal';

import refs from './js/common/refs';
import openMobileMenu from './js/index/burger';
import init from './js/index/init';
import choosingCard from './js/index/chooseProductCard';
import addToCart from './js/common/addToCart';
import openRestCategories from './js/index/openRestCategories';
import closeRestCategories from './js/index/closeRestCategories';
import searchProducts from './js/index/searchProducts';
import closeSearchContainer from './js/index/closeSearchContainer';

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
