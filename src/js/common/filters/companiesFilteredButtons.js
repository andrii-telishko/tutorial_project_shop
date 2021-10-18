import refs from '../refs';

const companiesFilterBtn = () => {
  return [...refs.companiesFilter.children].map(item => item.firstElementChild);
};

export default companiesFilterBtn;
