import refs from '../common/refs';

const countTotalPrice = store => {
  const total = [...refs.tableBody.children].reduce((reducer, item, index) => {
    const service = Object.values(store[index].service);
    let totalProduct;
    if (service.includes('checked') && service.includes(false)) {
      totalProduct = store[index].price * store[index].amount + 15;
    } else if (service.includes('checked')) {
      totalProduct = store[index].price * store[index].amount + 30;
    } else {
      totalProduct = store[index].price * store[index].amount;
    }
    // const totalProduct = store[index].price * store[index].amount;
    item.children[3].firstElementChild.textContent = totalProduct.toFixed(2);
    return (reducer += totalProduct);
  }, 0);

  refs.cartTotalPriceOnPage.textContent = `$${total.toFixed(2)}`;
};

export default countTotalPrice;
