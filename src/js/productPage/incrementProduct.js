import refs from '../common/refs';

const incrementProduct = e => {
  const counter =
    refs.productContainer.lastElementChild.children[8].children[2];

  let totalCount = +counter.textContent;

  if (e.target.textContent === '+') {
    totalCount += 1;
    counter.textContent = totalCount;
  } else {
    if (counter.textContent === '1') {
      return;
    } else {
      totalCount -= 1;
      counter.textContent = totalCount;
    }
  }
};

export default incrementProduct;
