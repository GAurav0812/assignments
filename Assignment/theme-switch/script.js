"use strict";
var switchBtn = document.getElementById("switch");
var currentTheme = "light";
document.body.className += " " + currentTheme;
switchBtn.addEventListener("click", function () {
  if (currentTheme === "light") {
    currentTheme = "dark";
    document.body.classList.remove("light");
    document.body.className += " " + currentTheme;
  } else {
    currentTheme = "light";
    document.body.classList.remove("dark");
    document.body.className += " " + currentTheme;
  }
  console.log(currentTheme);
});
