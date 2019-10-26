const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "todo"
  });
  
  // Connect to MySQL and Create a Database
  connection.connect(function(err){
      if (err) throw err;
      console.log("Connected!");

      connection.query("CREATE DATABASE IF NOT EXISTS testing2", function(err, result) {
          if (err) throw err;
          console.log("Database Created");

          connection.end();
      });
  });