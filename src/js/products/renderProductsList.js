import { store } from '../common/store';
import markup from '../index/markup';
import refs from '../common/refs';

const renderProductsList = () => {
  store.map(({ id, name, price, image }) => {
    refs.productsList.insertAdjacentHTML(
      'beforeend',
      markup.productsMarkup(id, name, price, image),
    );
  });
};

export default renderProductsList;
