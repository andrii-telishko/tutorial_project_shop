import refs from '../common/refs';

const initModal = () => {
  const selectOptions = [...refs.modalSelect].map(item => {
    return [...item.children].map(select => {
      return select.value;
    });
  });

  const percent = [
    [2, 5, 10],
    [2, 4, 8],
    [4, 8, 12],
    [3, 6, 10],
  ];

  const selectValue = [...refs.modalSelect].map((item, index) => {
    let newValue = JSON.parse(refs.bankInputs[index].value);
    newValue.period = +item.value;
    refs.bankInputs[index].value = JSON.stringify(newValue);

    return +item.value;
  });

  selectOptions.forEach((options, index) => {
    let percentValue;
    if (selectValue[index] === Math.max(...options)) {
      refs.creditPercent[index].textContent = `${Math.max(
        ...percent[index],
      )}% commission`;
      percentValue = Math.max(...percent[index]);
    } else if (selectValue[index] === Math.min(...options)) {
      refs.creditPercent[index].textContent = `${Math.min(
        ...percent[index],
      )}% commission`;
      percentValue = Math.min(...percent[index]);
    } else {
      refs.creditPercent[
        index
      ].textContent = `${percent[index][1]}% commission`;
      percentValue = percent[index][1];
    }

    let newValue = JSON.parse(refs.bankInputs[index].value);
    newValue.percent = percentValue;
    refs.bankInputs[index].value = JSON.stringify(newValue);
  });

  const bankPercents = [...refs.creditPercent].map(item =>
    Number.parseInt(item.textContent),
  );

  const pageTotal = +refs.cartTotalPriceOnPage.textContent
    .split('')
    .slice(1)
    .join('');

  [...refs.priceForMonth].forEach((item, index) => {
    item.textContent = `$${(
      (pageTotal + (pageTotal * bankPercents[index]) / 100) /
      selectValue[index]
    ).toFixed(2)} per/month`;

    let newValue = JSON.parse(refs.bankInputs[index].value);
    newValue.credit = (
      (pageTotal + (pageTotal * bankPercents[index]) / 100) /
      selectValue[index]
    ).toFixed(2);
    refs.bankInputs[index].value = JSON.stringify(newValue);
  });

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
