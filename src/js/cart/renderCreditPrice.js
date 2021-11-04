import refs from '../common/refs';

const renderCreditPrice = () => {
  const checkedInput = [...refs.bankInputs].find(input => input.checked);

  if (checkedInput) {
    const value = JSON.parse(checkedInput.value);

    refs.creditPrice.textContent = `$${value.total}`;

    refs.paymentPrice.textContent = `$${value.credit}`;

    refs.cartTotalPriceOnPage.setAttribute('style', 'color: grey');

    refs.creditPriceBlock.setAttribute('style', 'display: grid');

    refs.paymentPriceBlock.setAttribute('style', 'display: grid');

    refs.modalBackdrop.classList.add('is-hidden');
  } else {
    return;
  }
};

export default renderCreditPrice;
