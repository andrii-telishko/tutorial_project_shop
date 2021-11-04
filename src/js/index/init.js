import initCards from './initCards';
import initCategories from './initCategories';
import initCart from '../common/initCart';

const init = () => {
  initCards();
  initCategories();
  initCart();
};
export default init;
