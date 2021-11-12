import refs from '../common/refs';

const initModal = () => {
  // create array of arrays with selected values credit period for each bank
  const selectOptions = [...refs.modalSelect].map(item => {
    return [...item.children].map(select => {
      return select.value;
    });
  });

  // create array with percents for bank service

  const percent = [
    [2, 5, 10],
    [2, 4, 8],
    [4, 8, 12],
    [3, 6, 10],
  ];

  // create array with selected values of credit period

  const selectValue = [...refs.modalSelect].map((item, index) => {
    // change attribute value for each bank on selected value
    let newValue = JSON.parse(refs.bankInputs[index].value);
    newValue.period = +item.value;
    refs.bankInputs[index].value = JSON.stringify(newValue);

    return +item.value;
  });

  selectOptions.forEach((options, index) => {
    let percentValue;
    //check if selected value of credit period is max for every bank
    if (selectValue[index] === Math.max(...options)) {
      // render commission for bank service with max value for every bank
      refs.creditPercent[index].textContent = `${Math.max(
        ...percent[index],
      )}% commission`;
      //re-wright variable with max value of percents
      percentValue = Math.max(...percent[index]);
      // check if selected value of credit period is min for every bank
    } else if (selectValue[index] === Math.min(...options)) {
      // render commission for bank service with min value for every bank
      refs.creditPercent[index].textContent = `${Math.min(
        ...percent[index],
      )}% commission`;
      //re-wright variable with min value of percents
      percentValue = Math.min(...percent[index]);
      // check if selected value of credit period no min no max
    } else {
      refs.creditPercent[
        index
      ].textContent = `${percent[index][1]}% commission`;
      percentValue = percent[index][1];
    }

    //re-wright value attribute for every bank

    let newValue = JSON.parse(refs.bankInputs[index].value);
    newValue.percent = percentValue;
    refs.bankInputs[index].value = JSON.stringify(newValue);
  });

  // create array with percents of bank service

  const bankPercents = [...refs.creditPercent].map(item =>
    Number.parseInt(item.textContent),
  );

  // get total price of cart

  const pageTotal = +refs.cartTotalPriceOnPage.textContent
    .split('')
    .slice(1)
    .join('');

  // count and render price for month for each bank

  [...refs.priceForMonth].forEach((item, index) => {
    item.textContent = `$${(
      (pageTotal + (pageTotal * bankPercents[index]) / 100) /
      selectValue[index]
    ).toFixed(2)} per/month`;

    // re-write value attribute for each bank

    let newValue = JSON.parse(refs.bankInputs[index].value);
    newValue.credit = (
      (pageTotal + (pageTotal * bankPercents[index]) / 100) /
      selectValue[index]
    ).toFixed(2);
    refs.bankInputs[index].value = JSON.stringify(newValue);
  });

  //count and render total price with credit for each bank

  [...refs.modalTotal].forEach((item, index) => {
    item.textContent = `Total: ${(
      pageTotal +
      (pageTotal * bankPercents[index]) / 100
    ).toFixed(2)}`;
    let newValue = JSON.parse(refs.bankInputs[index].value);
    newValue.total = (
      pageTotal +
      (pageTotal * bankPercents[index]) / 100
    ).toFixed(2);
    refs.bankInputs[index].value = JSON.stringify(newValue);
  });
};

export default initModal;
