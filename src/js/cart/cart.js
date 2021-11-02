import '../../styles/main.scss';
import 'normalize.css';

import initCartPage from './initCartPage';
import { getStorageItem, setStorageItem } from '../common/utils';
import incrementProductsOnCartPage from './incrementProductOnCartPage';
import refs from '../common/refs';
import changeStock from '../common/changeStock';
import deleteProductFromCartPage from './deleteProductFromCartPage';
import useCoupons from './useCoupons';
import initAlsoByList from './initAlsoBuyList';
import addToCartFromAlsoList from './addToCartFromAlsoList';
import changeAdditionalInput from './changeAdditionalInput';
import addService from './addService';
import { openModal } from '../common/modal/toggleModal';
import closeModal from './closeModal';
import initModal from './initModal';
import enableModalButton from './enableModalButton';
import renderCreditPrice from './renderCreditPrice';

changeStock(getStorageItem('cart'));

addService(getStorageItem('cart'), 'cart');

initCartPage(getStorageItem('cart'));

initAlsoByList();

initModal();

setStorageItem('credit', []);

refs.tableBody.addEventListener('click', incrementProductsOnCartPage);

refs.tableBody.addEventListener('click', deleteProductFromCartPage);

refs.couponForm.addEventListener('submit', useCoupons);

refs.alsoBuyList.addEventListener('click', addToCartFromAlsoList);

refs.tableBody.addEventListener('click', changeAdditionalInput);

refs.creditButton.addEventListener('click', openModal);

refs.modalBackdrop.addEventListener('click', closeModal);

window.addEventListener('keydown', closeModal);

refs.creditModal.addEventListener('change', initModal);

refs.creditModal.addEventListener('change', enableModalButton);

refs.modalButton.addEventListener('click', renderCreditPrice);
