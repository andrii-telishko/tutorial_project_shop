import '../../styles/main.scss';
import 'normalize.css';

import initCartPage from './initCartPage';
import { getStorageItem } from '../common/utils';
import incrementProductsOnCartPage from './incrementProductOnCartPage';
import refs from '../common/refs';
import changeStock from '../common/changeStock';
import deleteProductFromCartPage from './deleteProductFromCartPage';
import useCoupons from './useCoupons';
import initAlsoByList from './initAlsoBuyList';
import addToCartFromAlsoList from './addToCartFromAlsoList';
import changeAdditionalInput from './changeAdditionalInput';
import addService from './addService';

changeStock(getStorageItem('cart'));

addService(getStorageItem('cart'), 'cart');

initCartPage(getStorageItem('cart'));

initAlsoByList();

refs.tableBody.addEventListener('click', incrementProductsOnCartPage);

refs.tableBody.addEventListener('click', deleteProductFromCartPage);

refs.couponForm.addEventListener('submit', useCoupons);

refs.alsoBuyList.addEventListener('click', addToCartFromAlsoList);

refs.tableBody.addEventListener('click', changeAdditionalInput);
