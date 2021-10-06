import './styles/main.scss';
import 'normalize.css';
import './js/index/slider';
import refs from './js/common/refs';
import openMobileMenu from './js/index/burger';
import { closeCartMenu, openCartMenu, addToCart } from './js/common/sidebar';
import init from './js/index/init';
import choosingCard from './js/index/chooseProductCard';

window.addEventListener('DOMContentLoaded', init);

refs.menuBtn.addEventListener('click', openMobileMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartBtn.addEventListener('click', openCartMenu);
refs.featureSection.addEventListener('click', choosingCard);
refs.featuresCard.addEventListener('click', addToCart);
refs.arrivalList.addEventListener('click', addToCart);
refs.popularList.addEventListener('click', addToCart);
