var path = require("path");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, "./config.json"))[env];
const mysql = require("mysql");
const util = require('util')

// const connection = mysql.createConnection({
//   host: config.host,
//   user: config.username,
//   password: config.password,
//   database: config.database
// });

// connection.connect(function (err) {
//   if (!err) {
//     console.log("Database is connected ... nn");
//   } else {
//     console.log("Error connecting database ... nn");
//     throw err;
//   }
// });

const connPool = mysql.createPool({
  connectionLimit: config.pool.max,
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
});
connPool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }    
  if (connection) connection.release()    
    return
})
connPool.on("connection", function (connection) {
  console.log("Connected");
  // Set a session variable
  //connection.query('SET SESSION auto_increment_increment=1')
});
// connPool.end(function (err) {
//     // all connections in the pool have ended
// });
// Promisify for Node.js async/await.
connPool.query = util.promisify(connPool.query)

module.exports = connPool;
