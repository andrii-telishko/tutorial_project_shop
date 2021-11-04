import { getStorageItem, setStorageItem } from '../common/utils';
import refs from '../common/refs';
import cartSidebarItem from '../../templates/common/cartSidebarItem.hbs';
import initCart from '../common/initCart';
import pagination from '../common/pagination';

const deleteProduct = e => {
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');
  let category = getStorageItem('category');
  if (e.target.textContent === 'Remove') {
    refs.cartSidebarList.innerHTML = '';
    refs.productsList.innerHTML = '';

    const deletedCart = cart.find(product => product.id === +id);

    category = category.map(product => {
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
  setStorageItem('category', category);
  pagination(category);
};

export default deleteProduct;
