'use strict';

var button = document.querySelector('button');
var dropdown = document.querySelector('option');

button.addEventListener('click', function () {
  button.innerHTML = "LOADING";

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/turnomatic');
  xhr.setRequestHeader('Content-Type', 'application/json');
  var dropdown = {
      "case": "hoodie"
  };
  console.log(dropdown);

//elküldi az adatokat a szervernek
  xhr.send(JSON.stringify(dropdown));

//megjeleníti az elküldött resultot az oldalon, ha a servernek sikerült visszaküldenie az adatot
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      var valami = document.createElement('div');
      valami.innerText = xhr.responseText; //responsetext = az a text amit a szerver visszaküld
    }
  }
})
