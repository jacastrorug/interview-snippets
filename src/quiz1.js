/*
    1. What is the value of output?
*/

const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);

/*
    2. What's the value of output?
*/

const myPromise = () => Promise.resolve("I have resolved!");
function firstFunction() {
  myPromise().then((res) => console.log(`First: ${res}`));
  console.log("First");
}
async function secondFunction() {
  console.log(`Second: ${await myPromise()}`);
  console.log("Second");
}
firstFunction();
secondFunction();

/*
    3. What's the value of output?
*/

function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same");
  } else {
    console.log("They are the same!");
  }
}

const person = { name: "Jorge" };
compareMembers(person);

/*
    4. What's the value of output?
*/

const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ["pink", "red", "blue"];

console.log(colorConfig.colors[1]);

/*
    5. In what order will the numbers 1 - 5 printed to the console? Why?
*/

(function () {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  new Promise((resolve, reject) => resolve(5)).then(num => console.log(num));
  console.log(4);
})();

