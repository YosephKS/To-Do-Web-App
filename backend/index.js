const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: "localhost",  
    user: "root",   
    password: "12345",    // Password is dependent on Local MySQL
    database: "todo"      // Don't Change the Database!
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(cors())
app.use(express.json());

// REST APIs Below

// 1. Get Tasks Saved
app.get('/readTable/:tableName', (req, res) => {
    const tableName = req.params.tableName;
    connection.query("SELECT * FROM " + tableName, function (err, result) {
        if (err) throw err;
        return res.json(result);
      });
});


// 2. Update the Fields in Tables
app.post('/updateTable/:tableName', urlencodedParser, (req, res) => {
    const tableName = req.params.tableName;
    tasks = req.body.tasks; 
    console.log(JSON.stringify(tasks));

    const sql = "UPDATE " + tableName + " SET tasks = ('" + JSON.stringify(tasks) + "')";

    // Update the MySQL Query
    connection.query(sql);
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});