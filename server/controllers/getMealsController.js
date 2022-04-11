const { getMeals } = require('../database');

const getMealsController = (req, res) => {
  getMeals()
    .then((data) => res.json(data.rows))
    .catch(console.log);
};

module.exports = getMealsController;
