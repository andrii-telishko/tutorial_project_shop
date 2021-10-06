import { store } from '../common/store';
import markup from '../index/markup';
import refs from '../common/refs';

const renderProductsList = () => {
  console.log(store);
  store.map(({ id, name, price, image }) => {
    refs.productsList.insertAdjacentHTML(
      'beforeend',
      markup.popularMarkup(id, name, price, image),
    );
  });
};

export default renderProductsList;
