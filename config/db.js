const Pool = require('pg').Pool
const DB_PASSWORD = process.env['DB_PASSWORD']

//DB Connection
const pool = new Pool({
    user:'postgres',
    password: DB_PASSWORD,
    host:'localhost',
    port:5432,
    database:'fakebook'
});

module.exports = pool