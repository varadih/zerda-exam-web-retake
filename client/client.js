'use strict';

var button = document.querySelector('button');
var dropdown = document.getElementById('dropdown');
var placeForText = document.querySelector('#placeForText');

button.addEventListener('click', function () {
  button.innerHTML = "LOADING";

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/turnomatic');
  xhr.setRequestHeader('Content-Type', 'application/json');
  var selected = {
      "case": dropdown.options[dropdown.selectedIndex].value
  };
  console.log(selected);

  xhr.send(JSON.stringify(selected));

  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      var yourNumber = document.createElement('li');
      yourNumber.innerText = "Your number is: " + xhr.responseText;
      placeForText.appendChild(yourNumber);
      button.innerHTML = "Get another number";
    }
  }
})
