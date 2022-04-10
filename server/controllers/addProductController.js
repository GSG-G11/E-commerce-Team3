const { addProduct } = require('../database');

const addProductController = (req, res) => {
  const { name, description, category, price, img } = req.body;
  addProduct(name, description, category, price, img)
    .then((data) => res.json(data))
    .catch(console.log);
};

module.exports = addProductController;
