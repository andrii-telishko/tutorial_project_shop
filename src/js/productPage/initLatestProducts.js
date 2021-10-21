import { getStorageItem } from '../common/utils';
import sliderItem from '../../templates/product-page/sliderItem.hbs';
import refs from '../common/refs';

const initLatestProducts = () => {
  const latestProducts = getStorageItem('latestProducts');

  refs.latestList.innerHTML = sliderItem(latestProducts);
};

export default initLatestProducts;
