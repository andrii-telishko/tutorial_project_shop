import { openCartMenu } from './sidebar';

const addToCart = e => {
  if (e.target.nodeName === 'BUTTON') {
    openCartMenu();
    console.log(e.target.dataset.id);
  } else {
    openCartMenu();
    console.log(e.target.parentElement.dataset.id);
  }
};

export default addToCart;
