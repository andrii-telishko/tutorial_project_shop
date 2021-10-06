import fetchProducts from './fetchProducts';
import { setupStore, store } from '../common/store';
import {
  renderFeatureSection,
  renderArrivalSection,
  renderPopularSection,
} from './renderSections';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products.data);

    renderFeatureSection(store);

    renderArrivalSection(store);

    renderPopularSection(store);
  }
};
export default init;
