import { getStorageItem, setStorageItem } from '../common/utils';
import refs from '../common/refs';
import initCartPage from './initCartPage';
import initModal from './initModal';
import changeStock from '../common/changeStock';
import renderStock from '../productPage/renderStock';

const incrementProductOnCartPage = e => {
  refs.couponForm.reset();
  let cart = getStorageItem('cart');
  let store = getStorageItem('store');
  const { id } = e.target.dataset;
  refs.tableBody.innerHTML = '';
  if (e.target.dataset.add === 'increment') {
    cart = cart.map(product => {
      let newProduct = {};
      if (product.id === +id) {
        if (product.stock === 0) {
          alert('There is no more game in stock');
          newProduct = { ...product };
        } else {
          newProduct = {
            ...product,
            amount: product.amount + 1,
            stock: product.stock - 1,
          };

          store = store.map(product => {
            if (product.id === +id) {
              product.stock -= 1;
            } else {
              product.stock -= 0;
            }
            return product;
          });
        }
      } else {
        newProduct = { ...product };
      }
      return newProduct;
    });
  } else if (e.target.dataset.add === 'decrement') {
    cart = cart.map(product => {
      let newProduct = {};

      if (product.id === +id) {
        if (product.amount !== 1) {
          newProduct = {
            ...product,
            amount: product.amount - 1,
            stock: product.stock + 1,
          };
        } else {
          newProduct = { ...product };
        }
      } else {
        newProduct = { ...product };
      }
      return newProduct;
    });
    store = store.map(product => {
      if (product.id === +id) {
        product.stock += 1;
      } else {
        product.stock += 0;
      }
      return product;
    });
  }
  initCartPage(cart);
  setStorageItem('cart', cart);
  setStorageItem('store', store);

  initModal();
};

export default incrementProductOnCartPage;
