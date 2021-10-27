import { getStorageItem } from '../common/utils';
import refs from '../common/refs';
import countTotalPrice from './countTotalPrice';

const useCoupons = e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const value = Object.fromEntries(formData.entries());
  let cart = getStorageItem('cart');

  switch (value.coupon) {
    case 'shara':
      [...refs.tableBody.children].forEach((item, index) => {
        const newPrice = item.children[2].lastElementChild;
        newPrice.textContent = (
          cart[index].price -
          cart[index].price * 0.1
        ).toFixed(2);
      });
      cart = cart.map((product, index) => {
        const newPrice =
          refs.tableBody.children[index].children[2].lastElementChild;

        let newProduct = {};
        newProduct = {
          ...product,
          price: newPrice.textContent,
        };
        return newProduct;
      });

      countTotalPrice(cart);
      refs.couponForm.reset();
      refs.couponButton.setAttribute('disabled', true);

      break;

    case 'super-shara':
      [...refs.tableBody.children].forEach((item, index) => {
        const newPrice = item.children[2].lastElementChild;
        newPrice.textContent = (
          cart[index].price -
          cart[index].price * 0.2
        ).toFixed(2);
      });
      cart = cart.map((product, index) => {
        const newPrice =
          refs.tableBody.children[index].children[2].lastElementChild;

        let newProduct = {};
        newProduct = {
          ...product,
          price: newPrice.textContent,
        };
        return newProduct;
      });

      countTotalPrice(cart);
      refs.couponForm.reset();
      refs.couponButton.setAttribute('disabled', true);
      break;

    case 'one-for-two':
      [...refs.tableBody.children].forEach((item, index) => {
        const newAmount = item.children[1].firstElementChild.children[1];

        newAmount.textContent = cart[index].amount + 1;
      });
      refs.couponForm.reset();
      refs.couponButton.setAttribute('disabled', true);

      break;

    default:
      alert('Please enter right coupon');
      refs.couponForm.reset();
  }
};

export default useCoupons;
