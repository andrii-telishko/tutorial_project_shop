import productsListTpl from '../../templates/common/productsList.hbs';
import refs from './refs';
import initStock from './initStock';

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
      initStock(store);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      refs.totalProductsInfo.textContent = `Viewing 24 of ${this.dataSource.length} products`;
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
