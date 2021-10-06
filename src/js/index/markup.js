const markup = {
  featureLeftListMarkup: (id, name, image) => {
    return `<li class="feature-section__list-item" >
                  <button class="feature-section__list-card" type="button" data-id="${id}">
                    <img src="${image}" alt="${name}" class="feature-section__list-card-img">
                    <h3 class="feature-section__list-card-title">${name}</h3>
                    </button>
                    <div class="feature-section__list-item-mobile-overlay">
                    <button type="button" class="feature-section__mobile-btn" data-id="${id}">
                  <span class="feature-section__mobile-btn-txt">Product page</span></button>
                    </div>
                </li>`;
  },

  featureCardMarkup: (id, name, price, image) => {
    return `

                <img src="${image}" alt="${name}" class="feature-section__main-card-img">
                <h3 class="feature-section__main-card-title">${name}</h3>
                <span class="feature-section__main-card-price">$${price}</span>
                <button type="button" class="feature-section__main-card-btn" data-id="${id}">
                  <span class="feature-section__main-card-btn-txt">Add to Cart</span></button>
                  <button type="button" class="feature-section__main-card-btn" data-id="${id}">
                  <span class="feature-section__main-card-btn-txt">Product page</span></button>
              `;
  },

  featureRightListMarkup: (id, name, image) => {
    return `

                <li class="feature-section__list-item">
                  <button class="feature-section__list-card" data-id="${id}" type=button>
                    <img src="${image}" alt="${name}" class="feature-section__list-card-img">
                    <h3 class="feature-section__list-card-title">${name}</h3>
                    
                  </button>
                </li>
      `;
  },

  arrivalMarkup: (id, name, price, image) => {
    return `
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
            </li>`;
  },

  popularMarkup: (id, name, price, image) => {
    return `
      <li class="popular__item">
            <div class="popular__card">
              <img src="${image}" alt="${name}" class="popular__img">
                <h3 class="popular__title">${name}</h3> 
              <span class="price">$${price}</span>
              <div class="popular__buttons">
              <button type="button" class="arrival__btn-cart popular-btn" data-id="${id}"></button>
                <button type="button" class="arrival__btn-product popular-btn" data-id="${id}"></button> 
                </div>
            </div>
            
          </li>`;
  },
};

export default markup;
