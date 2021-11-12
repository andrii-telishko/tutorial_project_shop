import refs from '../common/refs';

const countTotalPrice = store => {
  // count total price of all products with additional services

  const total = [...refs.tableBody.children].reduce((reducer, item, index) => {
    // get array of values from service object in every product
    const service = Object.values(store[index].service);
    let totalProduct;
    // count total price of every product which depends from price, amount of products and checked services
    if (service.includes('checked') && service.includes(false)) {
      totalProduct = store[index].price * store[index].amount + 15;
    } else if (service.includes('checked')) {
      totalProduct = store[index].price * store[index].amount + 30;
    } else {
      totalProduct = store[index].price * store[index].amount;
    }
    // render total price for each product
    item.children[3].firstElementChild.textContent = totalProduct.toFixed(2);
    // count total price for all cart of products
    return (reducer += totalProduct);
  }, 0);

  //render total price of all cart

  refs.cartTotalPriceOnPage.textContent = `$${total.toFixed(2)}`;
};

export default countTotalPrice;
