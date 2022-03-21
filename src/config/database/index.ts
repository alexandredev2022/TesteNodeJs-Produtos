import mysql from "mysql";

const connection = mysql.createConnection({
  port: 3307,
  user: "root",
  database: "desafio",
  password: "root",
});

connection.connect((Err) => {
  if (Err) console.log(Err);
  console.log("connect!")
});


export default connection;