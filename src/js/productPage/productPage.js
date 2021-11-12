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
import { initCart } from '../common/init';
import incrementProductsOnProductPage from './incrementProductsOnProductPage';
import deleteProductsOnProductPage from './deleteProductsOnProductPage';
import { message } from '../common/utils';
import validateFooterInput from '../common/validateFooterInput';

initProductPage();

initCart();

refs.textArea.value = message;

refs.productContainer.addEventListener('click', incrementProduct);

refs.reviewForm.addEventListener('input', enableReviewForm);

refs.reviewForm.addEventListener('submit', submitReviewForm);

refs.productContainer.addEventListener('click', addProductToCart);

refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);

refs.cartSidebarList.addEventListener('click', incrementProductsOnProductPage);
refs.cartSidebarList.addEventListener('click', deleteProductsOnProductPage);

refs.footerInput.addEventListener('input', validateFooterInput);
