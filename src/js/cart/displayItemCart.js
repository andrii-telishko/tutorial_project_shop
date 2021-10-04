import products from './products';
import refs from '../refs';

let store = [];

const displayItemCart = () => {
  store = [...products];
  localStorage.setItem('cart', JSON.stringify(store));
  store.map(product => {
    refs.cartItem.insertAdjacentHTML(
      'beforeend',
      `
        <li class="cart__item-box">
        <img src="${product.url}" alt="${product.name}" class="cart-img">
              <div class="cart-item-info">
                <h5 class="cart-item__title">${product.name}</h5>
                <p class="cart-item__price">${product.price}</p>
                <button class="cart-item__remove-btn" type="button">Remove</button>
                
              </div>
              <div class="cart-item__counter">
                  <button class="cart-item__mark mark-btn">+</button>
                  <span class="cart-item__mark">1</span>
                  <button class="cart-item__mark mark-btn">-</button>
                </div>
        </li>
      `,
    );
  });
  const total = store.reduce((total, product) => {
    return (total += +product.price);
  }, 0);
  refs.cartTotal.textContent = `Total: $${total}`;
};

export default displayItemCart;
