import refs from '../common/refs';
import tableItem from '../../templates/cart/tableItem.hbs';
import renderStock from '../productPage/renderStock';

const initCartPage = store => {
  refs.tableBody.insertAdjacentHTML('beforeend', tableItem(store));

  const total = [...refs.tableBody.children].reduce((reducer, item, index) => {
    const totalProduct = store[index].price * store[index].amount;
    item.children[3].firstElementChild.textContent = totalProduct.toFixed(2);
    return (reducer += totalProduct);
  }, 0);

  refs.cartTotalPriceOnPage.textContent = `$${total.toFixed(2)}`;

  [...refs.tableBody.children].forEach((item, index) => {
    const stockEl =
      item.firstElementChild.firstElementChild.lastElementChild
        .lastElementChild;
    renderStock(store[index].id, stockEl);
  });
};

export default initCartPage;
