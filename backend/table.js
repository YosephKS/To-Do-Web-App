const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "todo"
  });
  

    // Create Table if it does not exists
    connection.query("CREATE TABLE IF NOT EXISTS User (tasks JSON)", function (err, result) {
        if (err) throw err;
        console.log("Table Created");

        // Insert Initial Value into the Table
        connection.query("INSERT INTO User (tasks) VALUES ('"+ JSON.stringify({"task 1": "Task 1", "task 2": "Task 2"}) + "')", function (err, result) {
            if (err) throw err;
            console.log("Initial Entry Inserted");

            connection.end();
        });

            
    });