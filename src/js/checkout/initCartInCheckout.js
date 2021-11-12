import { getStorageItem, setStorageItem } from '../common/utils';
import refs from '../common/refs';
import finalList from '../../templates/checkout/productList.hbs';

const initCartInCheckout = () => {
  const store = getStorageItem('cart');
  const credit = getStorageItem('credit');

  // render products from  cart in checkout page

  refs.finalProductList.insertAdjacentHTML('beforeend', finalList(store));

  // count and render total price in checkout page

  const total = store.reduce((reducer, { amount, price, service }) => {
    let total;
    if (
      (service.first && !service.second) ||
      (!service.first && service.second)
    ) {
      total = price * amount + 15;
    } else if (service.first && service.second) {
      total = price * amount + 30;
    } else {
      total = price * amount;
    }
    reducer += total;

    return +reducer.toFixed(2);
  }, 0);

  refs.totalCheckout.textContent = `$${total}`;

  // render credit info in checkout page

  if (credit.length !== 0) {
    refs.totalCheckout.setAttribute('style', 'color: grey');

    const coupon = getStorageItem('shara');

    if (coupon) {
      refs.totalCheckout.textContent = coupon;
    } else {
      const total = store.reduce((reducer, { amount, price, service }) => {
        let total;
        if (
          (service.first && !service.second) ||
          (!service.first && service.second)
        ) {
          total = price * amount + 15;
        } else if (service.first && service.second) {
          total = price * amount + 30;
        } else {
          total = price * amount;
        }
        reducer += total;

        return +reducer.toFixed(2);
      }, 0);

      console.log(total);

      refs.totalCheckout.textContent = `$${total}`;
    }

    setStorageItem('shara', null);

    refs.creditCheckoutBlock.setAttribute('style', 'display: inline-block');
    refs.creditCheckout.textContent = `$${credit.total}`;

    refs.paymentCheckoutBlock.setAttribute('style', 'display: inline-block');
    refs.paymentCheckout.textContent = `$${credit.credit}`;

    refs.creditInfo.textContent = `You take credit in ${credit.name} on period ${credit.period} month. ${credit.name} takes ${credit.percent}% for their services, so you will pay $${credit.credit} per/month and finally total will be $${credit.total}.`;
  }
};

export default initCartInCheckout;
