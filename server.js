'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

app.use(bodyParser.json());
app.use(express.static('client'));

//behívja a függvényt, elvégzi a műveletet, kiírja bashben az eredményt
app.post('/turnomatic', function (req, res) {
  var masik = "kiir valamit";
  console.log(masik);


  connection.query('INSERT INTO cases (case_type) VALUES(?)', [masik],
  function(err) {
    if (err) throw err;
  });

//ha 200as választ kap, akkor elküldi a resultot a clinet oldalnak
  res.status(200).send(JSON.stringify(masik));
})

//connect to database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '21birds',
  database : 'turnomatic'
});

// connection.connect();

app.use(bodyParser.json());
app.use(express.static('client'));

//checking if the connection is all right
connection.connect(function(err){
   if(err){
     console.log("Error connecting to Db");
     return;
   }
   console.log("Connection established");
 });

//get request indítása
//
// app.get('/getall', function(req, res) {
//    connection.query('SELECT * FROM addition', function(err, data) {
//      if (err) {
//        res.status(500).json({error: err.message})
//      }
//      res.status(200).send(JSON.stringify(data))
//    })
// })
//

app.listen(3000);
