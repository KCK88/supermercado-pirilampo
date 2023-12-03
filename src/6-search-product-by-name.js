const stockProducts = require('./data.json');

const searchProductByName = (string) => {
  let descriptionAndPrice = {};
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === string) {
      descriptionAndPrice.description = stockProducts[index].description;
      descriptionAndPrice.formattedPrice = `R$ ${stockProducts[index].price}`;
      return descriptionAndPrice;
    }
  }
  return null;
};
module.exports = { searchProductByName };

// let object = {};
// console.log(object.name = 'air max');
// console.log(object.condition = 'new');
// console.log(object);
