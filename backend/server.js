const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "todo"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(cors())

// GET REST API

// 1. Create New Table For User to Save Their Tasks
app.get('/addTable/:tableName', (req, res) => {
    const tableName = req.params.tableName;
    connection.query("CREATE TABLE " + tableName + " (tasks JSON)", function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    
    return res.send('Table Created');
});

// 2. Get Tasks Saved
app.get('/readTable/:tableName', (req, res) => {
    const tableName = req.params.tableName;
    connection.query("SELECT * FROM " + tableName, function (err, result) {
        if (err) throw err;
        return res.json(result);
      });
});

/*
// 3. Update the Fields in Tables
app.get('/updateTable/:tableName', (req, res) => {
    const tableName = req.params.tableName;
    connection.query("SELECT * FROM " + tableName, function (err, result) {
        if (err) throw err;
        return res.send(result);
      });
});
*/

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});