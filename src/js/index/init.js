import initCards from './initCards';
import initCategories from './initCategories';
import { initCart } from '../common/init';

const init = () => {
  initCards();
  initCategories();
  initCart();
};
export default init;
