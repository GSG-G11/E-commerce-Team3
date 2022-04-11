const { addMeal } = require('../database');

const addMealController = (req, res) => {
  const { name, description, category, price, img } = req.body;
  addMeal(name, description, category, price, img)
    .then((data) => res.json(data))
    .catch(console.log);
};

module.exports = addMealController;
