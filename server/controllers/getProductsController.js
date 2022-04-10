const { getProducts } = require('../database');

const getProductController = (req, res) => {
  getProducts()
    .then((data) => res.json(data.rows))
    .catch(console.log);
};

module.exports = getProductController;
