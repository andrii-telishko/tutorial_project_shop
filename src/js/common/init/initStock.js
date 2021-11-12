import refs from '../refs';

const initStock = store => {
  [...refs.productsList.children].forEach((item, itemIndex) => {
    const stockEl = item.firstElementChild.lastElementChild;
    if (store[itemIndex].stock > 15 && store[itemIndex].stock <= 50) {
      stockEl.setAttribute('style', 'background-color: green; opacity: 0.9');
    } else if (store[itemIndex].stock > 5 && store[itemIndex].stock <= 15) {
      stockEl.setAttribute('style', 'background-color: orange; opacity: 0.9');
    } else if (store[itemIndex].stock > 0 && store[itemIndex].stock <= 5) {
      stockEl.setAttribute('style', 'background-color: red; opacity: 0.9');
    } else {
      stockEl.setAttribute('style', 'background-color: grey; opacity: 0.9');
    }
  });
};

export default initStock;
