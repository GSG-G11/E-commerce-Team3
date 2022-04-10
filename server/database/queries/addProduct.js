const connection = require('../config/connection');

module.exports = (name, description, category, price, img) =>
  connection.query(
    'INSERT INTO products (name, description, category, price, img_url ) VALUES ($1 , $2 , $3 , $4 , $5) RETURNING *',
    [name, description, category, price, img]
  );
