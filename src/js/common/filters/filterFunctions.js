import refs from '../refs';
import pagination from '../pagination';

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

const findProductsByManufacturer = (store, text) => {
  return store.filter(product => {
    const { manufacturer } = product;
    if (manufacturer === text) {
      return product;
    }
  });
};

const addClassOnButton = (companies, currentBtn) => {
  companies.map(item => {
    if (item.classList.contains('current')) {
      item.classList.remove('current');
      return;
    }
  });

  currentBtn.classList.add('current');
};

const findProductsByPrice = (prices, store) => {
  let priceStore = [];
  prices.forEach(input => {
    if (input.dataset.value === '10') {
      store.forEach(product => {
        if (product.price <= 10) {
          priceStore.push(product);
        }
      });
    } else if (input.dataset.value === '50') {
      store.filter(product => {
        if (product.price >= 50) {
          priceStore.push(product);
        }
      });
    } else {
      const minPrice = input.dataset.value.split('').slice(0, 2).join('');
      const maxPrice = input.dataset.value.split('').slice(3).join('');

      store.forEach(product => {
        if (product.price >= minPrice && product.price <= maxPrice) {
          priceStore.push(product);
        }
      });
    }
  });
  return priceStore;
};

export {
  renderFilteredProducts,
  errorFn,
  topScroll,
  findProductsByManufacturer,
  addClassOnButton,
  findProductsByPrice,
};
