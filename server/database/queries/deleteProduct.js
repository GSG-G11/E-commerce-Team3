const connection = require('../config/connection');

module.exports = (id) => connection.query('DELETE FROM products WHERE id = ($1) RETURNING *', [id]);
