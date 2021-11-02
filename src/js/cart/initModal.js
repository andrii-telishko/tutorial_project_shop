import refs from '../common/refs';

const initModal = () => {
  // console.log(refs.bankInputs[0].value);
  // const string = refs.bankInputs[0].value;
  // console.log(JSON.parse(string));
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

  const selectValue = [...refs.modalSelect].map(item => +item.value);

  selectOptions.forEach((options, index) => {
    if (selectValue[index] === Math.max(...options)) {
      refs.creditPercent[index].textContent = `${Math.max(
        ...percent[index],
      )}% commission`;
    } else if (selectValue[index] === Math.min(...options)) {
      refs.creditPercent[index].textContent = `${Math.min(
        ...percent[index],
      )}% commission`;
    } else {
      refs.creditPercent[
        index
      ].textContent = `${percent[index][1]}% commission`;
    }
  });

  const bankPercents = [...refs.creditPercent].map(item =>
    Number.parseInt(item.textContent),
  );

  const pageTotal = +refs.cartTotalPriceOnPage.textContent
    .split('')
    .slice(1)
    .join('');

  [...refs.priceForMonth].forEach((item, index) => {
    item.textContent = `$${(pageTotal / selectValue[index]).toFixed(
      2,
    )} per/month`;

    let newValue = JSON.parse(refs.bankInputs[index].value);
    newValue.credit = (pageTotal / selectValue[index]).toFixed(2);
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
