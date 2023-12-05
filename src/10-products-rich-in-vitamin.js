const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const productsRichInVitamin = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const descriptionPrice = {};
    if (stockProducts[index].nutritionalInfo.vitamins) {
      descriptionPrice.description = stockProducts[index].description;
      descriptionPrice.formattedPrice = `R$ ${stockProducts[index].price}`;
      const vitamins = Object.entries(stockProducts[index].nutritionalInfo.vitamins);
      const vitaminsArray = [];
      for (let index0 = 0; index0 < vitamins.length; index0 += 1) {
        vitaminsArray.push(`${vitamins[index0][0]} - ${vitamins[index0][1]}`);
      }
      descriptionPrice.vitaminsInformation = vitaminsArray;
      productsRichInVitamin.push(descriptionPrice);
    }
  }
  return productsRichInVitamin;
};
console.log(getProductsRichInVitamin());
module.exports = { getProductsRichInVitamin };
