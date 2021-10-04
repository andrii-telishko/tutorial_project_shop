import products from './products';
import refs from '../refs';

const displayItemCart = () => {
  products.map(product => {
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
                  <span class="cart-item__mark">0</span>
                  <button class="cart-item__mark mark-btn">-</button>
                </div>
        </li>
      `,
    );
  });
};

export default displayItemCart;
