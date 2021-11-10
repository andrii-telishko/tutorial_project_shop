import { getStorageItem, setStorageItem } from '../utils';
import refs from '../refs';
import cartSidebarItem from '../../../templates/common/cartSidebarItem.hbs';
import { initCart } from '../init';
import pagination from '../pagination';

const deleteProduct = e => {
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');
  let store = getStorageItem('store');
  if (e.target.textContent === 'Remove') {
    refs.cartSidebarList.innerHTML = '';
    refs.productsList.innerHTML = '';

    const deletedCart = cart.find(product => product.id === +id);

    store = store.map(product => {
      if (product.id === +id) {
        product.stock += deletedCart.amount;
      } else {
        product.stock += 0;
      }
      return product;
    });

    cart = cart.filter(product => product.id !== +id);
    refs.cartSidebarList.insertAdjacentHTML('beforeend', cartSidebarItem(cart));
  }
  setStorageItem('cart', cart);
  initCart();
  setStorageItem('store', store);
  pagination(getStorageItem('store'));
};

export default deleteProduct;
