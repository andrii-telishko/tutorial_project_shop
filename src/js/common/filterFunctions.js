import refs from './refs';
import pagination from './pagination';

const renderFilteredProducts = store => {
  pagination(store);
  refs.totalProductsInfo.textContent =
    store.length > 24
      ? `Viewing 24 of ${store.length} products`
      : `Viewing ${store.length} products`;
};

const errorFn = () => {
  refs.productsList.innerHTML = `<h2 class="error-message">Sorry, there is no games, you try to find</h2>`;
  refs.totalProductsInfo.textContent = '';
};

const topScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export { renderFilteredProducts, errorFn, topScroll };
