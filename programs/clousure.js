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
  