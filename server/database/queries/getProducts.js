const connection = require('../config/connection');

module.exports = () => connection.query('SELECT * FROM products ORDER BY id DESC', []);
