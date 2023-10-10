let x = 5;
function addNum(n) {
  return (n) => {
    return x + n;
  };
}

var testFun = addNum(3);
console.log(testFun(5));
console.log(addNum(6));


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


console.log(30 > 20 > 10)

//var arr= [1,2,3];
// output [2,3,1]

function rotLeft(a, d)
 {
    let rslt = a.slice(d).concat(a.slice(0,d));
    return rslt
 }

console.log(rotLeft(arr,0))

var x=3;
var d = function(){
  console.log(x);
  var x=5;
}

console.log(d);
