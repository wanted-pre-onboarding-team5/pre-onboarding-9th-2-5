export const getFilterdProducts = (
  products: Product[],
  spaceConditions: string[],
  priceConditions: { min: string; max: string },
) => {
  let filteredProducts: Product[] = products;

  if (spaceConditions.length > 0) {
    filteredProducts = filteredProducts?.filter(({ spaceCategory }: Product) =>
      spaceConditions.includes(spaceCategory),
    );
  }

  if (priceConditions.min !== '' && priceConditions.max !== '') {
    const { min, max } = priceConditions;
    if (+min < +max)
      filteredProducts = filteredProducts?.filter(
        ({ price }: Product) => price >= +min && price <= +max,
      );
  }

  return filteredProducts;
};
