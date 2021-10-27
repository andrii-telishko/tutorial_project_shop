import refs from '../common/refs';
import { getStorageItem, setStorageItem } from '../common/utils';
import initCartPage from './initCartPage';

const deleteProductFromCartPage = e => {
  const { id } = e.target.dataset;

  let cart = getStorageItem('cart');

  if (e.target.dataset.del === 'delete') {
    refs.tableBody.innerHTML = '';

    cart = cart.filter(product => product.id !== +id);
    setStorageItem('cart', cart);
    initCartPage(cart);
  }
};

export default deleteProductFromCartPage;
