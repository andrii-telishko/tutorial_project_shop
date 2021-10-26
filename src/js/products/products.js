import '../../styles/main.scss';
import 'normalize.css';
import '../common/pagination';
import '../common/modal/modal';

import refs from '../common/refs';
import addToCart from '../common/addToCart';
import { store } from '../common/store';
import { openCartMenu, closeCartMenu } from '../common/sidebar';
import pagination from '../common/pagination';
import renderCompanies from '../common/renderCompanies';
import filters from '../common/filters/filters';
import initCart from '../common/initCart';
import incrementProducts from '../common/incrementProducts';
import deleteProduct from '../common/deleteProduct';
import initStock from '../common/initStock';

pagination(store);

initCart();

renderCompanies(store);

refs.loader.setAttribute('style', 'display:none');

filters(store);

refs.productsList.addEventListener('click', addToCart);
refs.cartBtn.addEventListener('click', openCartMenu);
refs.sidebarBtn.addEventListener('click', closeCartMenu);
refs.cartSidebarList.addEventListener('click', incrementProducts);
refs.cartSidebarList.addEventListener('click', deleteProduct);
