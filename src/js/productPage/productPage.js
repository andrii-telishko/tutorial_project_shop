import '../../styles/main.scss';
import 'normalize.css';
import '../common/modal/modal';

import initProductPage from './initProductPage';
import refs from '../common/refs';
import incrementProduct from './incrementProduct';
import submitReviewForm from './submitReviewForm';
import enableReviewForm from './enableReviewForm';
import addProductToCart from './addProductToCart';
import { openCartMenu, closeCartMenu } from '../common/sidebar';
import initCart from '../common/initCart';
import incrementProducts from '../common/incrementProducts';
import deleteProduct from '../common/deleteProduct';
import { message } from '../common/utils';

initProductPage();

initCart();

refs.textArea.value = message;

refs.productContainer.addEventListener('click', incrementProduct);

refs.reviewForm.addEventListener('input', enableReviewForm);

refs.reviewForm.addEventListener('submit', submitReviewForm);

refs.productContainer.addEventListener('click', addProductToCart);

refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);

refs.cartSidebarList.addEventListener('click', incrementProducts);
refs.cartSidebarList.addEventListener('click', deleteProduct);
