import refs from '../common/refs';
import findStockOfProduct from './findStockOfProduct';

const renderStock = (id, selector) => {
  const stockEl = selector;
  const stock = findStockOfProduct(id);
  console.log(stock);

  if (stock === undefined) {
    stockEl.textContent = "This game didn't left";
  } else {
    stockEl.textContent = `Left ${stock} games`;

    if (stock > 15 && stock <= 50) {
      stockEl.setAttribute('style', 'color: green; border-color: green');
    } else if (stock > 5 && stock <= 15) {
      stockEl.setAttribute('style', 'color: orange; border-color: orange');
    } else if (stock > 0 && stock <= 5) {
      stockEl.setAttribute('style', 'color: red; border-color: red');
    } else {
      stockEl.setAttribute('style', 'color: grey; border-color: grey');
    }
  }
};

export default renderStock;
