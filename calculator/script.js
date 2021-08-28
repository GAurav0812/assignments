"use strict";
var input = document.getElementById("input"), // input/output button
  number = document.querySelectorAll(".number"), // number buttons
  operator = document.querySelectorAll(".operator"), // operator buttons
  result = document.getElementById("result"), // equal button
  clear = document.getElementById("clear"),
  resultDisplayed = false; 

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    var currentString = input.innerText;
    var lastChar = currentString[currentString.length - 1];
    if (currentString === "0") {
      input.innerText = "";
    }
    input.innerText += e.target.innerText;
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    var currentString = input.innerText;
    var lastChar = currentString[currentString.length - 1];
    if (currentString === "0") {
      input.innerText = "";
    }
    input.innerText += e.target.innerText;
    var currentString = input.innerText;
    checkForOperators(currentString);
  });
}

function checkForOperators(currentString) {
  if (
    currentString.includes("+") ||
    currentString.includes("-") ||
    currentString.includes("x") ||
    currentString.includes("÷")
  ) {
    disableOperators();
  } else {
    enableOperators();
  }
}

function disableOperators() {
  for (var i = 0; i < operator.length; i++) {
    operator[i].className += " disabled";
  }
}
function enableOperators() {
  for (var i = 0; i < operator.length; i++) {
    operator[i].classList.remove("disabled");
  }
}
result.addEventListener("click", function () {
  var inputString = input.innerText;

  // var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  // console.log(operators);
  // console.log(numbers);
  console.log("----------------------------");
  var expression;
  if (inputString.includes("x")) {
    expression = inputString.replace(/x/, "*");
  } else if (inputString.includes("÷")) {
    expression = inputString.replace(/÷/, "/");
  } else {
    expression = inputString;
  }
  /*  if (inputString.includes("x")) {
    inputString.replaceAll("x", "*");
  }
  if (inputString.includes("÷")) {
    inputString.replaceAll("÷", "/");
  } */
  console.log("Result:" + eval(expression));
  input.innerText = eval(expression);
  // checkForOperators(input.innerText);
  enableOperators();
});
clear.addEventListener("click", function () {
  enableOperators();
  input.innerHTML = "0";
});
