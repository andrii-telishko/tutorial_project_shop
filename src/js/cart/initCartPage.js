import refs from '../common/refs';
import tableItem from '../../templates/cart/tableItem.hbs';

const initCartPage = store => {
  refs.tableBody.insertAdjacentHTML('beforeend', tableItem(store));
};

export default initCartPage;
