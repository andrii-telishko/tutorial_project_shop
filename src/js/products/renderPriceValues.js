import refs from '../common/refs';

const renderPriceValues = store => {
  const storePrices = store.map(({ price }) => price);
  const maxPrice = Math.max(...storePrices);
  const maxCeilPrice = Math.ceil(maxPrice);
  refs.priceFilter.value = maxCeilPrice;
  refs.priceFilter.max = maxCeilPrice;
  refs.priceRange.width = refs.priceFilter.value;
  refs.priceValue.textContent = `Value: $${maxCeilPrice}`;
};

export default renderPriceValues;
