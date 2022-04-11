const { editMael } = require('../database');

const editMealController = (req, res) => {
  const { name, description, category, price, img } = req.body;
  const { id } = req.params;
  editMael(name, description, category, price, img, id)
    .then((data) => res.json(data))
    .catch(console.log);
};

module.exports = editMealController;
