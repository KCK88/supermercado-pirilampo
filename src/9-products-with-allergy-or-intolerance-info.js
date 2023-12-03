const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const productsWithAllergyOrIntoleranceInfo = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const descriptionPrice = {};
    if (stockProducts[index].allergyOrIntolerance) {
      const allergy = stockProducts[index].allergyOrIntolerance.join(' ');
      descriptionPrice.description = stockProducts[index].description;
      descriptionPrice.formattedPrice = `R$ ${stockProducts[index].price}`;
      descriptionPrice.allergyOrIntoleranceMessage = `Pode conter: ${allergy}`;
      productsWithAllergyOrIntoleranceInfo.push(descriptionPrice);
    }
  }
  return productsWithAllergyOrIntoleranceInfo;
};
console.log(getProductsWithAllergyOrIntoleranceInfo());
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
