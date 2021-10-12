import './styles/main.scss';
import 'normalize.css';
import './js/index/slider';
import './js/common/sidebar';
import refs from './js/common/refs';
import openMobileMenu from './js/index/burger';
import { openCategories, closeCategories } from './js/index/categories';

import init from './js/index/init';
import choosingCard from './js/index/chooseProductCard';
import addToCart from './js/common/addToCart';

window.addEventListener('DOMContentLoaded', init);

refs.menuBtn.addEventListener('click', openMobileMenu);
refs.featureSection.addEventListener('click', choosingCard);
refs.featuresCard.addEventListener('click', addToCart);
refs.arrivalList.addEventListener('click', addToCart);
refs.popularList.addEventListener('click', addToCart);
refs.categoriesList.addEventListener('click', openCategories);
refs.closeCategories.addEventListener('click', closeCategories);
