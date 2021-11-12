import '../../styles/main.scss';
import 'normalize.css';
import '../common/pagination';
import '../common/modal/modal';

import refs from '../common/refs';
import addToCart from '../common/addToCart';
import { openCartMenu, closeCartMenu } from '../common/sidebar';
import pagination from '../common/pagination';
import renderCompanies from '../common/renderCompanies';
import filters from '../common/filters/filters';
import { initCart } from '../common/init';
import incrementProducts from '../common/incrementProducts';
import deleteProduct from '../common/deleteProduct';
import { getStorageItem } from '../common/utils';

import initCategories from '../index/initCategories';
import openRestCategories from '../index/openRestCategories';
import closeRestCategories from '../index/closeRestCategories';
import validateFooterInput from '../common/validateFooterInput';

initCategories();

pagination(getStorageItem('store'));

initCart();

renderCompanies(getStorageItem('store'));

filters(getStorageItem('store'));

refs.productsList.addEventListener('click', addToCart);
refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartSidebarList.addEventListener('click', incrementProducts);
refs.cartSidebarList.addEventListener('click', deleteProduct);

refs.categoriesList.addEventListener('click', openRestCategories);
refs.cartOverlay.addEventListener('click', closeRestCategories);

refs.footerInput.addEventListener('input', validateFooterInput);

