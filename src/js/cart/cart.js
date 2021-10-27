import '../../styles/main.scss';
import 'normalize.css';

import initCartPage from './initCartPage';
import { getStorageItem } from '../common/utils';
import incrementProductsOnCartPage from './incrementProductOnCartPage';
import refs from '../common/refs';
import changeStock from '../common/changeStock';
import deleteProductFromCartPage from './deleteProductFromCartPage';
import useCoupons from './useCoupons';

changeStock(getStorageItem('cart'));

initCartPage(getStorageItem('cart'));

refs.tableBody.addEventListener('click', incrementProductsOnCartPage);

refs.tableBody.addEventListener('click', deleteProductFromCartPage);

refs.couponForm.addEventListener('submit', useCoupons);
