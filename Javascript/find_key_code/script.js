"use strict";
var result = document.getElementById("result");
result.innerText = "Please press any key of the keyboard";
document.addEventListener("keypress", function (event) {
  onKeyPress(event);
});
function onKeyPress(e) {
  result.innerHTML =
    "The Key pressed is <b>" +
    (e.which === 32 ? "SPACE" : e.key) +
    "</b> and the Key code is <b>" +
    e.keyCode +
    "</b>";

  document.title = e.keyCode;
}
