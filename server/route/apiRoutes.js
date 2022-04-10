const apiRouters = require('express').Router();
const { addProductController } = require('../controllers');

apiRouters.post('/api/v1/product', addProductController);

module.exports = apiRouters;
