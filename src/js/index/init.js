import refs from '../refs';
import fetchProducts from '../fetchProducts';
import { setupStore, store } from '../store';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const featuresLeftList = store.slice(0, 4);
    const featuresRightList = store.slice(4, 8);

    featuresLeftList
      .map(product => {
        const { name, price, image } = product;
        refs.featuresLeftList.insertAdjacentHTML(
          'beforeend',
          `<li class="feature-section__list-item">
                  <div class="feature-section__list-card">
                    <img src="${image}" alt="${name}" class="feature-section__list-card-img">
                    <h3 class="feature-section__list-card-title">${name}</h3>
                    <span class="price">$${price}</span>
                  </div>
                </li>`,
        );
      })
      .join('');

    refs.featuresCard.insertAdjacentHTML(
      'beforeend',
      `

                <img src="${store[0].image}" alt="${store[0].name}" class="feature-section__main-card-img">
                <h3 class="feature-section__main-card-title">${store[0].name}</h3>
                <span class="feature-section__main-card-price">$${store[0].price}</span>
                <button type="button" class="feature-section__main-card-btn">
                  <span class="feature-section__main-card-btn-txt">Add to Cart</span></button>
              `,
    );

    featuresRightList
      .map(product => {
        const { name, price, image } = product;
        refs.featuresRightList.insertAdjacentHTML(
          'beforeend',
          `

                <li class="feature-section__list-item">
                  <div class="feature-section__list-card">
                    <img src="${image}" alt="${name}" class="feature-section__list-card-img">
                    <h3 class="feature-section__list-card-title">${name}</h3>
                    <span class="price">$${price}</span>
                  </div>
                </li>
      `,
        );
      })
      .join('');
  }
};

export default init;
