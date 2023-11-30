const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  const uniqueProducts = stockProducts.length;
  return uniqueProducts;
};
module.exports = { getUniqueProductsAmount };
