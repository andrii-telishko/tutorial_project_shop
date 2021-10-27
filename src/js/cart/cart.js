import '../../styles/main.scss';
import 'normalize.css';

import initCartPage from './initCartPage';
import { getStorageItem } from '../common/utils';
import incrementProductsOnCartPage from './incrementProductOnCartPage';
import refs from '../common/refs';
import initCart from '../common/initCart';
import changeStock from '../common/changeStock';

changeStock(getStorageItem('cart'));

initCartPage(getStorageItem('cart'));

refs.tableBody.addEventListener('click', incrementProductsOnCartPage);
