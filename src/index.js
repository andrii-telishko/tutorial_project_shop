import './styles/main.scss';
import 'normalize.css';
import './js/index/slider';
import refs from './js/refs';
import openMobileMenu from './js/index/burger';
import { closeCartMenu, openCartMenu } from './js/sidebar';
import init from './js/index/init';

window.addEventListener('DOMContentLoaded', init);

refs.menuBtn.addEventListener('click', openMobileMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartBtn.addEventListener('click', openCartMenu);
