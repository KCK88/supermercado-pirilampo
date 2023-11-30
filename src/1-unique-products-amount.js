const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  const uniqueProductsCount = stockProducts.length;
  return uniqueProductsCount;
};
module.exports = { getUniqueProductsAmount };
