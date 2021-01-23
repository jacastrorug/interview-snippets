/*
 1. This in Global context
*/

console.log(this); // Will be the global context "this"

/*
 2. Function scope
*/

function whoIsThis() {
  console.log("Context this function");
  console.log(this); // Will be the "this" that call the function
}

whoIsThis();

/*
 3. Function stric mode
*/

function whoIsThisStrict() {
  "use strict";
  console.log(`Context this with strict mode: ${this}`); // Strict mode reset the this context so this will be undefined
}

whoIsThisStrict();

/*
  4. This in method
*/

const person = {
  name: "James",
  sayHi: function () {
    console.log(`Hi am ${this.name}`);
  },
};

/*
This must be the object that calls the method
'Hi am James'
*/
person.sayHi();

/*
  5. Gettin method to variable
*/

const person2 = {
  name: "Gilbert",
  sayHi: function () {
    console.log(`Hi am ${this.name}`);
  },
};

// Will be "Hi am undefinded" because is calling by global this
const sayHi = person2.sayHi;
sayHi();

/*
 6. This in "class" context
*/

function Person(name) {
  // this is instantiate as {}
  this.name = name;
}

// adding method
Person.prototype.sayHi = function () {
  console.log(`Hi am ${this.name}`); // this is the instance of the "class"
};

const jorge = new Person("Jorge");
jorge.sayHi();

/*
  Practice
*/

var generalObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log(`Outer func: this.foo = ${this.foo}`);
    console.log(`Outer func: self.foo = ${self.foo}`);
    (function () {
        console.log(`Inner func: this.foo = ${this.foo}`);
        console.log(`Inner func: self.foo = ${self.foo}`);
    })();
  },
};

generalObject.func();
