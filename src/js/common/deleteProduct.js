import { getStorageItem, setStorageItem } from './utils';
import refs from './refs';
import cartSidebarItem from '../../templates/common/cartSidebarItem.hbs';
import initCart from './initCart';

const deleteProduct = e => {
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');
  if (e.target.textContent === 'Remove') {
    refs.cartSidebarList.innerHTML = '';
    cart = cart.filter(product => product.id !== +id);
    refs.cartSidebarList.insertAdjacentHTML('beforeend', cartSidebarItem(cart));
  }
  setStorageItem('cart', cart);
  initCart();
};

export default deleteProduct;
