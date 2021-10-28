import refs from '../common/refs';
import { getStorageItem } from '../common/utils';

const incrementProduct = e => {
  const counter =
    refs.productContainer.lastElementChild.children[9].children[2];

  let totalCount = +counter.textContent;

  if (e.target.textContent === '+') {
    totalCount += 1;
    counter.textContent = totalCount;
  } else if (e.target.textContent === '-') {
    if (counter.textContent === '1') {
      return;
    } else {
      totalCount -= 1;
      counter.textContent = totalCount;
    }
  }
};

export default incrementProduct;
