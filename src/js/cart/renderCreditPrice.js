import refs from '../common/refs';
import { setStorageItem } from '../common/utils';

const renderCreditPrice = () => {
  //find checked bank
  const checkedInput = [...refs.bankInputs].find(input => input.checked);

  if (checkedInput) {
    //get value attribute with info about credit from checked bank
    const value = JSON.parse(checkedInput.value);

    // render total with credit on cart page

    refs.creditPrice.textContent = `$${value.total}`;

    refs.paymentPrice.textContent = `$${value.credit}`;

    // add additional styles

    refs.cartTotalPriceOnPage.setAttribute('style', 'color: grey');

    refs.creditPriceBlock.setAttribute('style', 'display: grid');

    refs.paymentPriceBlock.setAttribute('style', 'display: grid');

    // hide modal and create credit object in local storage

    refs.modalBackdrop.classList.add('is-hidden');

    setStorageItem('credit', value);
  } else {
    return;
  }
};

export default renderCreditPrice;
