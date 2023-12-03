const stockProducts = require('./data.json');

const searchProductsByBrand = (string) => {
  const productsByBrand = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const descriptionAndPrice = {};
    if (stockProducts[index].brand === string) {
      descriptionAndPrice.description = stockProducts[index].description;
      descriptionAndPrice.formattedPrice = `R$ ${stockProducts[index].price}`;
      productsByBrand.push(descriptionAndPrice);
    }
  }
  return productsByBrand;
};
console.log(searchProductsByBrand('Hortifruti'));
module.exports = { searchProductsByBrand };
