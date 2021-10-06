import refs from '../common/refs';
import fetchProducts from './fetchProducts';
import { setupStore, store } from '../common/store';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products.data);

    const featuresLeftList = store.slice(0, 4);
    const featuresRightList = store.slice(4, 8);

    featuresLeftList
      .map(product => {
        const { name, image, id } = product;
        refs.featuresLeftList.insertAdjacentHTML(
          'beforeend',
          `<li class="feature-section__list-item" >
                  <button class="feature-section__list-card" type="button" data-id="${id}">
                    <img src="${image}" alt="${name}" class="feature-section__list-card-img">
                    <h3 class="feature-section__list-card-title">${name}</h3>
                    </button>
                    <div class="feature-section__list-item-mobile-overlay">
                       <button type="button" class="feature-section__mobile-btn" data-id="${id}">
                  <span class="feature-section__mobile-btn-txt">Product page</span></button>
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
                <button type="button" class="feature-section__main-card-btn" data-id="${store[0].id}">
                  <span class="feature-section__main-card-btn-txt">Add to Cart</span></button>
                  <button type="button" class="feature-section__main-card-btn" data-id="${store[0].id}">
                  <span class="feature-section__main-card-btn-txt">Product page</span></button>
              `,
    );

    featuresRightList
      .map(product => {
        const { name, price, image, id } = product;
        refs.featuresRightList.insertAdjacentHTML(
          'beforeend',
          `

                <li class="feature-section__list-item">
                  <button class="feature-section__list-card" data-id="${id}" type=button>
                    <img src="${image}" alt="${name}" class="feature-section__list-card-img">
                    <h3 class="feature-section__list-card-title">${name}</h3>
                    
                  </button>
                </li>
      `,
        );
      })
      .join('');

    const updatingStore = [...store].sort(
      (firstProduct, secondProduct) =>
        secondProduct.updatedAt - firstProduct.updatedAt,
    );

    updatingStore.slice(0, 4).map(product => {
      const { id, name, price, image } = product;
      refs.arrivalList.insertAdjacentHTML(
        'beforeend',
        `
      <li class="arrival__item">
              <div class="arrival__card">
                <img src="${image}" alt="${name}" class="arrival__img">
                <div class="arrival__card-info">
                  <h4 class="arrival__card-title">${name}</h4>
                  <p class="price arrival__price">$${price}</p>
                </div>
                <button type="button" class="arrival__btn-cart" data-id="${id}"></button>
                <button type="button" class="arrival__btn-product" data-id="${id}"></button>
              </div>
            </li>`,
      );
    });

    const popularityStore = [...store].sort(
      (firstProduct, secondProduct) => secondProduct.price - firstProduct.price,
    );

    popularityStore.slice(0, 6).map(product => {
      const { id, name, price, image } = product;
      refs.popularList.insertAdjacentHTML(
        'beforeend',
        `
      <li class="popular__item">
            <div class="popular__card">
              <img src="${image}" alt="${name}" class="popular__img">
                <h3 class="popular__title">${name}</h3> 
              <span class="price">$${price}</span>
              <div class="popular__buttons">
              
 <button type="button" class="arrival__btn-cart popular-btn" data-id="${id}"></button>
                <button type="button" class="arrival__btn-product popular-btn" data-id="${id}"></button>             </div>
            </div>
            
          </li>`,
      );
    });
  }
};

export default init;
