export const getProducts = () => {
  return fetch('src/mocks/data.json').then((res) => res.json());
};
