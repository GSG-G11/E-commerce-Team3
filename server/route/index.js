const router = require('express').Router();
const apiRouters = require('./apiRoutes');

router.use(apiRouters);

module.exports = router;
