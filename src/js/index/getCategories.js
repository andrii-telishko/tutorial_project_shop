const getCategories = store => {
  const categories = store.map(({ categories }) => categories);
  const allCategories = [];
  categories.map(categories => {
    categories.map(category => {
      allCategories.push(category);
    });
  });

  const sortCategories = [...new Set(allCategories.map(name => name))];
  return sortCategories;
};

export default getCategories;
