'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

app.use(bodyParser.json());
app.use(express.static('client'));

//connect to database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '21birds',
  database : 'turnomatic'
});


//behívja a függvényt, elvégzi a műveletet, kiírja bashben az eredményt
app.post('/turnomatic', function (req, res) {
  // var case = req.body.case;
  var masik = "kiir valamit";
  console.log(masik);


  connection.query('INSERT INTO cases (case_type) VALUES(?)', [masik],
  function(err) {
    if (err) throw err;
  });

//ha 200as választ kap, akkor elküldi a resultot a clinet oldalnak
  res.status(200).send(JSON.stringify(masik));
})



//checking if the connection is all right
connection.connect(function(err){
   if(err){
     console.log("Error connecting to Db");
     return;
   }
   console.log("Connection established");
 });

app.listen(3000);
