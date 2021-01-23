(function () {
  /*
  Is the same like:
  b = 3; -> define global var
  var a = b; -> define a function scope var
  */
  var a = (b = 3);
})();

console.log(`a is defined? : ${typeof a !== "undefined"}`);
console.log(`b is defined? : ${typeof b !== "undefined"}`);

function foo(val1, val2, val1) {
  console.log(val1, val2); // val1 will be equal to 3 parameter
}

console.log(foo(1, 2)); // undefined 2
console.log(foo(1, 2, 3)); // 3 2

function foo1() {
  return {
    bar: "hello",
  };
}

function foo2(){
    return 
    {
        bar: "hello"
    };
}
