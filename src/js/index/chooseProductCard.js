import refs from '../common/refs';
import { store } from '../common/store';
import featuresCardTpl from '../../templates/main/featuresCard.hbs';

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
  refs.featuresCard.innerHTML = featuresCardTpl(checkedCard);
};

export default choosingCard;
