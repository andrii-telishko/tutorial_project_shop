import { getStorageItem, setStorageItem } from '../common/utils';
import initCart from '../common/initCart';
import refs from '../common/refs';
import cartSidebarItem from '../../templates/common/cartSidebarItem.hbs';
import pagination from '../common/pagination';

const incrementProducts = e => {
  let category = getStorageItem('category');
  const { id } = e.target.dataset;
  let cart = getStorageItem('cart');
  if (e.target.dataset.add === 'increment') {
    refs.productsList.innerHTML = '';
    const amount = e.target.previousElementSibling;

    cart = cart.map(product => {
      let newAmount;
      if (product.id === +id) {
        if (product.stock !== 0) {
          product.stock -= 1;
          newAmount = product.amount + 1;
          product = { ...product, amount: newAmount };
        } else {
          alert('There is no more this game in stock');
          product = { ...product };
        }
      }
      return product;
    });
    amount.textContent = cart.find(product => {
      let newAmount;
      if (product.id === +id) {
        newAmount = product.amount;
      }
      return newAmount;
    }).amount;

    category = category.map(product => {
      if (product.id === +id) {
        product.stock -= 1;
      } else {
        product.stock -= 0;
      }
      return product;
    });
  } else if (e.target.dataset.add === 'decrement') {
    refs.productsList.innerHTML = '';
    const amount = e.target.nextElementSibling;
    if (amount.textContent > 1) {
      cart = cart.map(product => {
        let newAmount;
        if (product.id === +id) {
          product.stock += 1;
          newAmount = product.amount - 1;
          product = { ...product, amount: newAmount };
        }
        return product;
      });
      amount.textContent = cart.find(product => {
        let newAmount;
        if (product.id === +id) {
          newAmount = product.amount;
        }
        return newAmount;
      }).amount;
    } else {
      refs.cartSidebarList.innerHTML = '';
      cart = cart.filter(product => product.id !== +id);
      refs.cartSidebarList.insertAdjacentHTML(
        'beforeend',
        cartSidebarItem(cart),
      );
    }

    category = category.map(product => {
      if (product.id === +id) {
        product.stock += 1;
      } else {
        product.stock += 0;
      }
      return product;
    });
  }

  setStorageItem('cart', cart);
  setStorageItem('category', category);
  initCart();
  pagination(category);
};

export default incrementProducts;
