import refs from '../common/refs';

const handlerSubmit = e => {
  e.preventDefault();

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
  console.log(JSON.stringify(actuallyFormData));
};

export default handlerSubmit;
