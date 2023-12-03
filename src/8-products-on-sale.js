const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const productsOnSale = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const descriptionPriceOnSale = {};
    if (stockProducts[index].onSale === true) {
      descriptionPriceOnSale.description = stockProducts[index].description;
      descriptionPriceOnSale.formattedPrice = `R$ ${stockProducts[index].price}`;
      descriptionPriceOnSale.onSale = stockProducts[index].onSale;
      productsOnSale.push(descriptionPriceOnSale);
    }
  }
  return productsOnSale;
};
console.log(getProductsOnSale());
module.exports = { getProductsOnSale };
