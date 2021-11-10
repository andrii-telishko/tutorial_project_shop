import { getStorageItem, setStorageItem } from '../../common/utils';
import refs from '../../common/refs';
import init from '../init';

const changeAdditionalInput = e => {
  refs.tableBody.innerHTML = '';
  const { id } = e.target.dataset;
  let store = getStorageItem('cart');
  const product = store.find(product => product.id === +id);
  if (e.target.dataset.service === 'first') {
    if (product.service.first === false) {
      product.service.first = 'checked';
    } else {
      product.service.first = false;
    }
  } else if (e.target.dataset.service === 'second') {
    if (product.service.second === false) {
      product.service.second = 'checked';
    } else {
      product.service.second = false;
    }
  } else {
    setStorageItem('cart', store);
  }
  setStorageItem('cart', store);
  init.initCartPage(store);
  init.initModal();
};

export default changeAdditionalInput;
