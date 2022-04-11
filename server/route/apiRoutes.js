const apiRouters = require('express').Router();
const {
  addProductController,
  getProductController,
  deleteProductController,
  editProductController,
} = require('../controllers');

apiRouters.post('/api/v1/meal', addProductController);
apiRouters.get('/api/v1/meals', getProductController);
apiRouters.delete('/api/v1/meal/:id', deleteProductController);
apiRouters.put('/api/v1/meal/:id', editProductController);

module.exports = apiRouters;
