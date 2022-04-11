const apiRouters = require('express').Router();
const {
  addMealController,
  getMealsController,
  deleteMealController,
  editMealController,
} = require('../controllers');

apiRouters.post('/api/v1/meal', addMealController);
apiRouters.get('/api/v1/meals', getMealsController);
apiRouters.delete('/api/v1/meal/:id', deleteMealController);
apiRouters.put('/api/v1/meal/:id', editMealController);

module.exports = apiRouters;
