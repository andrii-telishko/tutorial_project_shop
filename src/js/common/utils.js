const BASE_URL = 'https://shrouded-taiga-44041.herokuapp.com';

const USER_IMG =
  'http://1.bp.blogspot.com/-8INpbfQJJDU/T4DTA4aGGlI/AAAAAAAAANk/GDjrpjyh8m0/s1600/Alf_digital_painting_by_ezekdesigns.png';

const getStorageItem = item => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }

  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const convertName = name => {
  return name.split(' ').slice(0, 3).join(' ');
};

const findId = () => window.location.search.split('').slice(4).join('');

const createStockForProduct = store => {
  const productsStock = getStorageItem('productsStock');
  return store.map((product, index) => {
    return (product = {
      ...product,
      stock: productsStock[index],
    });
  });
};

const message =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo doloremque itaque autem illum reiciendis est!';

const createStock = (store, stock) => {
  let newStock = getStorageItem(stock);
  if (newStock.length === 0) {
    for (let i = 0; i < store.length; i += 1) {
      let k = Math.ceil((Math.random() * 100) / 2);
      newStock = [...newStock, k];
    }
    setStorageItem(stock, newStock);
  } else {
    setStorageItem(stock, newStock);
  }
};

export {
  BASE_URL,
  getStorageItem,
  setStorageItem,
  USER_IMG,
  convertName,
  findId,
  createStockForProduct,
  message,
  createStock,
};
