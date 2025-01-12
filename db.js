const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'busbookingsystem',
  multipleStatements: true
});

module.exports = pool;