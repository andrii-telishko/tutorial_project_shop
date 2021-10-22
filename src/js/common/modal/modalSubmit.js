const modalSubmit = e => {
  e.preventDefault();

  const modalData = new FormData(e.currentTarget);
  const value = Object.fromEntries(modalData.entries());

  console.log(JSON.stringify(value));
};

export default modalSubmit;
