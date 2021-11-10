const randomProductsArray = store => {
  let arr = [];
  for (let i = 0; i <= 5; i += 1) {
    const index = Math.ceil(Math.random() * store.length - 1);
    arr.push(store[index]);
  }

  return arr;
};

export default randomProductsArray;
