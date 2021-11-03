import refs from '../common/refs';
import { getStorageItem, setStorageItem } from '../common/utils';
import initCartPage from './initCartPage';
import initModal from './initModal';

const deleteProductFromCartPage = e => {
  const { id } = e.target.dataset;
  let store = getStorageItem('store');

  let cart = getStorageItem('cart');

  if (e.target.dataset.del === 'delete') {
    refs.tableBody.innerHTML = '';

    const removeProduct = cart.find(product => product.id === +id);

    store = store.map(product => {
      if (product.id === removeProduct.id) {
        product.stock += removeProduct.amount;
      }
      return product;
    });
    cart = cart.filter(product => product.id !== +id);
    setStorageItem('cart', cart);
    setStorageItem('store', store);
    initCartPage(cart);
    initModal();
  }
};

export default deleteProductFromCartPage;
