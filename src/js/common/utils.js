const BASE_URL = 'http://localhost:3030';

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

export { BASE_URL, getStorageItem, setStorageItem, USER_IMG, convertName };
