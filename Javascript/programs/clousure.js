let myFunction = {
  foo: "bar",
  func: function () {
    (function () {
      console.log(this.foo);
    })();
    (() => {
      console.log(this.foo);
    })();
  },
};

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
}
console.log("js");

x();
