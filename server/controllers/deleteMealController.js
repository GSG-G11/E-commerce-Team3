const { deleteMeal } = require('../database');

const deleteMealController = (req, res) => {
  const { id } = req.params;
  deleteMeal(id)
    .then((data) => res.json(data))
    .catch(console.log);
};

module.exports = deleteMealController;
