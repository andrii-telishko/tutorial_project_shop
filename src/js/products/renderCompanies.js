import refs from '../common/refs';

const renderCompanies = store => {
  const companies = [
    'All',
    ...new Set(store.map(({ manufacturer }) => manufacturer)),
  ];

  companies.map(company => {
    refs.companiesFilter.insertAdjacentHTML(
      'beforeend',
      `<li>
        <button type="button" class="company-button">${company}</button>
      </li>`,
    );
  });
};

export default renderCompanies;
