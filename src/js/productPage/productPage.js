import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';
import '../common/modal/modal';

import initProductPage from './initProductPage';
import refs from '../common/refs';
import incrementProduct from './incrementProduct';
import submitReviewForm from './submitReviewForm';
import enableReviewForm from './enableReviewForm';
import addToCart from '../common/addToCart';
import { openCartMenu, closeCartMenu } from '../common/sidebar';
import initCart from '../common/initCart';

initProductPage();

initCart();

refs.productContainer.addEventListener('click', incrementProduct);

refs.reviewForm.addEventListener('input', enableReviewForm);

refs.reviewForm.addEventListener('submit', submitReviewForm);

refs.productContainer.addEventListener('click', addToCart);

refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
