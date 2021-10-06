import refs from '../common/refs';
import { store } from '../common/store';

const choosingCard = e => {
  if (e.target.nodeName === 'BUTTON') {
    const checkedId = e.target.getAttribute('data-id');

    renderMainCard(checkedId);
  } else if (e.target.parentNode.nodeName === 'BUTTON') {
    const checkedId = e.target.parentNode.getAttribute('data-id');
    renderMainCard(checkedId);
  }
};

const renderMainCard = checkedId => {
  const checkedCard = store.find(({ id }) => id === +checkedId);
  const { id, name, price, image } = checkedCard;
  refs.featuresCard.innerHTML = `
    <img src="${image}" alt="${name}" class="feature-section__main-card-img">
                <h3 class="feature-section__main-card-title">${name}</h3>
                <span class="feature-section__main-card-price">$${price}</span>
                <button type="button" class="feature-section__main-card-btn" data-id="${id}">
                  <span class="feature-section__main-card-btn-txt">Add to Cart</span></button>
                  <button type="button" class="feature-section__main-card-btn" data-id="${id}">
                  <span class="feature-section__main-card-btn-txt">Product page</span></button>`;
};

export default choosingCard;
