import { getStorageItem, setStorageItem, findId } from '../../common/utils';
import refs from '../../common/refs';
import cartSidebarItem from '../../../templates/common/cartSidebarItem.hbs';
import { initCart } from '../../common/init';
import renderStock from '../renderStock';

const deleteProductsOnProductPage = e => {
  const productId = findId();
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');
  let store = getStorageItem('store');
  if (e.target.textContent === 'Remove') {
    refs.cartSidebarList.innerHTML = '';

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
  if (productId === id) {
    renderStock(id, refs.productContainer.lastElementChild.children[1]);
  }
};

export default deleteProductsOnProductPage;
