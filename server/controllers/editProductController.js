const { editProduct } = require('../database');

const editProductController = (req, res) => {
  const { name, description, category, price, img } = req.body;
  const {id} = req.params;
  editProduct(name, description, category, price, img, id)
    .then((data) => res.json(data))
    .catch(console.log);
 
};

module.exports = editProductController;
