import { openCartMenu } from './sidebar';

const addToCart = e => {
  if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'SPAN') {
    openCartMenu();
  }
};

export default addToCart;
