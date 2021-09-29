import './styles/main.scss';
import 'normalize.css';
import './js/index/slider';
import refs from './js/refs';
import openMobileMenu from './js/index/burger';

refs.menuBtn.addEventListener('click', openMobileMenu);
