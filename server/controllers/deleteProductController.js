const { deleteProduct } = require('../database');

const deleteProductController = (req, res) => {
  const { id } = req.params;
  deleteProduct(id)
    .then((data) => res.json(data))
    .catch(console.log);
};

module.exports = deleteProductController;
