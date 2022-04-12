const { getMeal } = require('../database');

const getMealController = (req, res) => {
  const { id } = req.params;
  getMeal(id)
    .then((data) => res.json(data.rows))
    .catch(console.log);
};

module.exports = getMealController;
