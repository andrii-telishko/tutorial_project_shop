import '../../styles/main.scss';
import 'normalize.css';
import '../common/sidebar';
import '../common/modal/modal';

import initProductPage from './initProductPage';
import refs from '../common/refs';
import incrementProduct from './incrementProduct';

initProductPage();

refs.productContainer.addEventListener('click', incrementProduct);
