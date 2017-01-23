'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

app.use(bodyParser.json());
app.use(express.static('client'));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '21birds',
  database : 'turnomatic'
});

app.post('/turnomatic', function (req, res) {
  var case_type = req.body.case;
  var responseFromServer =
      {
        "status": "ok",
        "number": "123"
      }
  console.log(responseFromServer);

  connection.query('INSERT INTO cases (case_type) VALUES(?)', [case_type],
  function(err) {
    if (err) throw err;
  });

  res.status(200).send(JSON.stringify(case_type));


  // connection.query('SELECT * FROM case_number', function (err, rows) {
  // if(!err) {
  //   var rowsTextOnly = rows.map(function (row) {
  //     return row.case_number;
  //   });
  //   res.send({
  //     "status": "ok",
  //     "number": rowsTextOnly
  //   });
  // }
});

  // res.status(418).send(
  //   {
  //     "status": "error",
  //     "message": "server error, please find a member of staff to get your number"
  //   }
  // )
})

connection.connect(function(err){
   if(err){
     console.log("Error connecting to Db");
     return;
   }
   console.log("Connection established");
 });

app.listen(3000);
