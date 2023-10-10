"use strict";

var result = document.getElementById("result");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var reset = document.getElementById("reset");
result.innerText = 0;

minus.addEventListener("click", function (e) {
  // e.preventDefault();
  var value = result.innerText;
  value--;
  result.innerText = value;
});

plus.addEventListener("click", function (e) {
  // e.preventDefault();
  var value = result.innerText;
  value++;
  result.innerText = value;
});
reset.addEventListener("click", function (e) {
  // e.preventDefault();
  result.innerText = 0;
});
