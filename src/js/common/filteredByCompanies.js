import { topScroll, renderFilteredProducts } from './filterFunctions';
import refs from './refs';
import { store } from './store';
import companiesFilterBtn from './companiesFilteredButtons';

const filteredByCompanies = e => {
  if (e.target.nodeName === 'BUTTON') {
    refs.productsList.innerHTML = '';

    const companiesFilterButtons = companiesFilterBtn();
    companiesFilterButtons.map(item => {
      if (item.classList.contains('current')) {
        item.classList.remove('current');
        return;
      }
    });

    e.target.classList.add('current');

    if (e.target.textContent === 'All') {
      renderFilteredProducts(store);
    } else {
      const filteredProductsByCompanies = store.filter(product => {
        const { manufacturer } = product;
        if (manufacturer === e.target.textContent) {
          return product;
        }
      });
      renderFilteredProducts(filteredProductsByCompanies);
    }

    topScroll();
  } else {
    return;
  }
};

export default filteredByCompanies;
