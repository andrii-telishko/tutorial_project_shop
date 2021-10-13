import refs from '../common/refs';
import featuresLeftListTpl from '../../templates/main/featuresLeftList.hbs';
import featuresCardTpl from '../../templates/main/featuresCard.hbs';
import featuresRightListTpl from '../../templates/main/featuresRightList.hbs';
import arrivalListTpl from '../../templates/main/arrivalList.hbs';
import popularListTpl from '../../templates/main/popularList.hbs';

const renderFeatureSection = store => {
  const featuresLeftList = store.slice(0, 4);
  const featuresRightList = store.slice(4, 8);

  refs.featuresLeftList.innerHTML = featuresLeftListTpl(featuresLeftList);

  refs.featuresCard.insertAdjacentHTML('beforeend', featuresCardTpl(store[0]));

  refs.featuresRightList.innerHTML = featuresRightListTpl(featuresRightList);
};

const renderArrivalSection = store => {
  const updatingStore = [...store].sort(
    (firstProduct, secondProduct) =>
      secondProduct.updatedAt - firstProduct.updatedAt,
  );

  refs.arrivalList.innerHTML = arrivalListTpl(updatingStore.slice(0, 4));
};

const renderPopularSection = store => {
  const popularityStore = [...store].sort(
    (firstProduct, secondProduct) => secondProduct.price - firstProduct.price,
  );

  refs.popularList.innerHTML = popularListTpl(popularityStore.slice(0, 6));
};

export { renderFeatureSection, renderArrivalSection, renderPopularSection };
