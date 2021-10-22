import productsListTpl from '../../templates/common/productsList.hbs';
import refs from './refs';

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
        top: 0,
        behavior: 'smooth',
      });
    },
    afterIsLastPage: function () {
      refs.totalProductsInfo.textContent = `Viewing ${store.length % 24} of ${
        store.length
      } products`;
    },
  });

  if (store.length < 24) {
    $('.pagination-block').pagination('hide');
  }
};

export default pagination;
