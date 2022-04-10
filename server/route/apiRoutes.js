const apiRouters = require('express').Router();
const { addProductController, getProductController } = require('../controllers');

apiRouters.post('/api/v1/product', addProductController);
apiRouters.get('/api/v1/products', getProductController);

module.exports = apiRouters;
