// import { store } from './store';
import productsListTpl from '../../templates/common/productsList.hbs';

const pagination = store => {
  $('.pagination-block').pagination({
    dataSource: store,
    pageSize: 24,
    showPrevious: false,
    showNext: false,
    ulClassName: 'pagination-list list',
    activeClassName: 'current-page',
    callback: function (store, pagination) {
      const html = Handlebars.compile(productsListTpl(store));
      $('.products__list').html(html);
      window.scrollTo({
        top: 120,
        behavior: 'smooth',
      });
    },
  });

  if (store.length < 24) {
    $('.pagination-block').pagination('hide');
  }
};

export default pagination;
