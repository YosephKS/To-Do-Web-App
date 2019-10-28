const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
  });
  
  // Connect to MySQL and Create a Database
  connection.connect(function(err){
      if (err) throw err;
      console.log("Connected!");

      // Create Database if it does not exists
      connection.query("CREATE DATABASE IF NOT EXISTS todo", function(err, result) {
          if (err) throw err;
          console.log("Database Created");

          connection.end();
      });
  });