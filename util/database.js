const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  database: "tomato-backend",
  socketPath: "/private/tmp/mysql.sock",
});

module.exports = pool.promise();
