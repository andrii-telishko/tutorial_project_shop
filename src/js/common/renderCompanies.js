import refs from '../common/refs';
import companiesFilterBtn from './companiesFilteredButtons';

const renderCompanies = store => {
  const companies = [
    'All',
    ...new Set(store.map(({ manufacturer }) => manufacturer)),
  ];

  companies.map(company => {
    refs.companiesFilter.insertAdjacentHTML(
      'beforeend',
      `<li >
        <button type="button" class="companies-filter__item">${company}</button>
      </li>`,
    );
  });

  const companiesFilterButtons = companiesFilterBtn();

  companiesFilterButtons[0].classList.add('current');
};

export default renderCompanies;
