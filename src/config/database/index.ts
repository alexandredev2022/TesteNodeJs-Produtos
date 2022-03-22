import mysql from "mysql";

const pool = mysql.createPool({
  port: 3307,
  user: "root",
  database: "desafio",
  password: "root",
});

export default pool;