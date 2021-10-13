import refs from '../common/refs';
import markup from './markup';

const renderFeatureSection = store => {
  const featuresLeftList = store.slice(0, 4);
  const featuresRightList = store.slice(4, 8);

  featuresLeftList
    .map(product => {
      const { name, image, id } = product;
      refs.featuresLeftList.insertAdjacentHTML(
        'beforeend',
        markup.featureLeftListMarkup(id, name, image),
      );
    })
    .join('');

  const { id, name, price, image } = store[0];

  refs.featuresCard.insertAdjacentHTML(
    'beforeend',
    markup.featureCardMarkup(id, name, price, image),
  );

  featuresRightList
    .map(product => {
      const { name, image, id } = product;
      refs.featuresRightList.insertAdjacentHTML(
        'beforeend',
        markup.featureRightListMarkup(id, name, image),
      );
    })
    .join('');
};

const renderArrivalSection = store => {
  const updatingStore = [...store].sort(
    (firstProduct, secondProduct) =>
      secondProduct.updatedAt - firstProduct.updatedAt,
  );

  updatingStore.slice(0, 4).map(product => {
    const { id, name, price, image } = product;
    refs.arrivalList.insertAdjacentHTML(
      'beforeend',
      markup.arrivalMarkup(id, name, price, image),
    );
  });
};

const renderPopularSection = store => {
  const popularityStore = [...store].sort(
    (firstProduct, secondProduct) => secondProduct.price - firstProduct.price,
  );

  popularityStore.slice(0, 6).map(product => {
    const { id, name, price, image } = product;
    refs.popularList.insertAdjacentHTML(
      'beforeend',
      markup.popularMarkup(id, name, price, image),
    );
  });
};

export { renderFeatureSection, renderArrivalSection, renderPopularSection };
