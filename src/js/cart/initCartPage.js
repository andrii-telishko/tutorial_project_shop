import refs from '../common/refs';
import tableItem from '../../templates/cart/tableItem.hbs';
import renderStock from '../productPage/renderStock';
import countTotalPrice from './countTotalPrice';

const initCartPage = store => {
  refs.tableBody.insertAdjacentHTML('beforeend', tableItem(store));
  countTotalPrice(store);

  [...refs.tableBody.children].forEach((item, index) => {
    const stockEl =
      item.firstElementChild.firstElementChild.lastElementChild
        .lastElementChild;
    renderStock(store[index].id, stockEl);
  });
};

export default initCartPage;
