const apiRouters = require('express').Router();
const {
  addProductController,
  getProductController,
  deleteProductController,
} = require('../controllers');

apiRouters.post('/api/v1/product', addProductController);
apiRouters.get('/api/v1/products', getProductController);
apiRouters.delete('/api/v1/product/:id', deleteProductController);

module.exports = apiRouters;
