import refs from '../common/refs';
import filteredByName from '../common/filteredByName';
import filteredByCompanies from '../common/filteredByCompanies';
import filteredByPrice from '../common/filteredByPrice';

refs.searchFilter.addEventListener('input', filteredByName);

refs.companiesFilter.addEventListener('click', filteredByCompanies);

refs.priceFilter.addEventListener('change', filteredByPrice);
