const connection = require('../config/connection');

module.exports = (name, description, category, price, img) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  connection.query(
    'INSERT INTO products (name, description, category, price, img_url ) VALUES ($1 , $2 , $3 , $4 , $5) RETURNING *',
    // eslint-disable-next-line comma-dangle
    [name, description, category, price, img]
  );
