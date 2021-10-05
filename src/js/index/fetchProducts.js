import { BASE_URL } from '../common/utils';

const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products?$limit=8`).catch(error =>
    console.log(error),
  );

  if (response) {
    return response.json();
  }
  return response;
};

export default fetchProducts;
