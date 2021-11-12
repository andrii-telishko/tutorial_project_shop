import refs from '../common/refs';
import { getStorageItem, setStorageItem } from '../common/utils';

const handlerSubmit = e => {
  e.preventDefault();

  const store = getStorageItem('cart');
  const credit = getStorageItem('credit');
  let ordersStore = getStorageItem('orders');

  // cerate object orders

  let orders = {
    cart: {},
    delivery: {},
    payment: {},
    credit: {},
    price: null,
  };

  let { cart, delivery, payment } = orders;

  // wright cart info into object

  const products = store.map(item => {
    let product = {};
    product.services = {
      updating_game: false,
      language_patch: false,
    };
    const serviceValues = Object.values(item.service);

    product.name = item.name;
    product.price = `$${item.price}`;
    product.amount = item.amount;
    product.services.updating_game = serviceValues[0];
    product.services.language_patch = serviceValues[1];

    return product;
  });

  orders.cart = products;

  // wright delivery info into object

  const deliveryInput = [...refs.deliveryInputs].find(input => input.checked);

  delivery.type = deliveryInput.value;

  // create delivery fields in orders object which depends from delivery type

  if (deliveryInput.value === 'magazine') {
    const addressArr = refs.magazineAddress.textContent.split(',');
    const street = addressArr[0];
    const building = addressArr[1];
    const magazineItem = [...refs.magazines.children].find(magazine =>
      magazine.hasAttribute('style'),
    );
    delivery.name = magazineItem.textContent;
    delivery.street = street;
    delivery.building = building;
    delivery.city = 'Kyiv';
  } else if (deliveryInput.value === 'post') {
    delivery.name = refs.postName.textContent;
    delivery.street = refs.postStreet.textContent.split(',')[0];
    delivery.building = refs.postStreet.textContent.split(',')[1];
    delivery.city = refs.postCity.textContent;
    delivery.region = refs.postRegion.textContent;
    delivery.post_code = refs.postCode.textContent;
    delivery.phone = refs.postPhone.textContent;
    delivery.working_hours = {
      mon_fri: refs.postWeek.textContent,
      sat: refs.postSaturday.textContent,
      sun: refs.postSunday.textContent,
    };
  } else if (deliveryInput.value === 'dhl') {
    const dhlData = new FormData(refs.dhlForm);
    const value = Object.fromEntries(dhlData.entries());
    delivery = { ...value };
  }

  orders.delivery = delivery;

  // add payment info into object orders

  // currentTarget - it is payment form

  const buyerData = new FormData(e.currentTarget);
  const value = Object.fromEntries(buyerData.entries());

  const checkedPaymentBtn = [...refs.radioBtnPaymentList].find(
    button => button.checked,
  );

  if (checkedPaymentBtn.value === 'transfer') {
    const checkedBankBtn = [...refs.radioBtnBankList].find(
      button => button.checked,
    );
    if (!checkedBankBtn) {
      alert('Please choose necessary bank');
      return;
    }
  }

  let actuallyFormData = {};
  for (const key in value) {
    if (value[key]) {
      const name = key;
      actuallyFormData[name] = value[key];
    }
  }

  payment = { ...actuallyFormData };

  orders.payment = payment;

  // creat price value in orders object which depend from delivery method

  let price;

  if (credit.length === 0) {
    switch (deliveryInput.value) {
      case 'magazine':
        price = refs.totalPriceInCheckoutPage.textContent;
        break;
      case 'post':
        price =
          +refs.totalPriceInCheckoutPage.textContent
            .split('')
            .slice(1)
            .join('') + 3;
        break;
      case 'dhl':
        price =
          +refs.totalPriceInCheckoutPage.textContent
            .split('')
            .slice(1)
            .join('') + 10;
        break;
      default:
        return;
    }
  } else {
    orders.credit = { ...credit };

    orders.credit.description = refs.creditDescription.textContent;

    switch (deliveryInput.value) {
      case 'magazine':
        price = credit.credit;
        break;
      case 'post':
        price = +credit.credit + 3;
        break;
      case 'dhl':
        price = +credit.credit + 10;
        break;
      default:
        return;
    }
  }

  orders.price = `${price}`;
  refs.checkoutTolal.textContent = `Price with delivery: ${orders.price}`;
  console.log(orders);
  // add current order to orders in local storage
  ordersStore.push(orders);
  setStorageItem('orders', ordersStore);

  // show final modal and delete cart

  refs.modalBackdrop.classList.remove('is-hidden');
  refs.checkoutModal.classList.remove('is-hidden');
  setStorageItem('cart', []);
};

export default handlerSubmit;
