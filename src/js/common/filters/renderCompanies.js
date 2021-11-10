import refs from '../refs';
import companiesFilterBtn from './companiesFilteredButtons';

const renderCompanies = store => {
  const companies = [
    'All',
    ...new Set(store.map(({ manufacturer }) => manufacturer)),
  ];

  companies.map(company => {
    refs.companiesFilter.insertAdjacentHTML(
      'beforeend',
      `<li class="companies-filter__item">
        <button type="button" class="companies-filter__button">${company}</button>
      </li>`,
    );
  });

  const companiesFilterButtons = companiesFilterBtn();

  companiesFilterButtons[0].classList.add('current');
};

export default renderCompanies;
