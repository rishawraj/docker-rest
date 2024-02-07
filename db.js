const { Pool } = require("pg");

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "raj",
  password: "raj123",
  database: "demo",
});

module.exports = pool;
