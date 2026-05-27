//=> arrow function -- no function name --> also called the anonymous function
//no need to write function() keyword

//A shorter syntax for writing functions, introduced in ES6. Instead of the function keyword, you use =>.

// summary:
// - Arrow functions provide a concise syntax for writing functions.
// - They do not have their own `this` context; instead, they inherit it from the surrounding scope.
// - Arrow functions cannot be used as constructors and do not have the `arguments` object.
// - Use arrow functions for short, simple functions and when you need lexical `this`. Avoid them for object methods and constructors.   


// "Arrow functions are a concise way to write functions in ES6.
//  The biggest difference from regular functions is that they don't have their own this 
//  — they inherit it from the surrounding scope, which is called lexical scoping. 
//  This makes them ideal for callbacks, array methods, and situations inside class methods where you want to preserve the outer this.
//   However, you should avoid them for object methods or constructors where this needs to refer to the object itself."

let print = () => {
    console.log('hello world!!');
}

print();

console.log('=======');

let say = () => console.log('hello playwright');
say();

console.log('=======');

//arrow function with one param: can use ()
let even = (num) => num % 2 === 0;
let e1 = even(10);
console.log(e1);

console.log('=======');

//arrow function with one param: no need to use ()
let pop = number => number * 2;
let r1 = pop(100);
console.log(r1);

console.log('=======');
//arrow function with two params

let sub = (a, b) => a - b;
let sb = sub(10, 20);
console.log(sb);

console.log('=======');

let bye = e => console.log(e);
bye('naveen');

console.log('=======');

//external name: openBrowser
//internal name: no name --> anonymous
//param - 1 param -> browserName
//return : boolean: true/false


/**
 * 
 * @param {string} browserName 
 * @returns 
 */
let openBrowser = browserName => {
    switch (browserName) {
        case 'chrome':
            console.log('launch chrme');
            return true;
    
        default:
            console.log('invalid browser');
            return false;
    }
};

let flag = openBrowser('chrome');
console.log(flag);

console.log('==========');

let checkEnv = (envName, browserVersion) => {
    console.log(envName);
    console.log(browserVersion);
    return 0;
}

let n = checkEnv('QA', 125.11);
console.log(n);


//====================================================

/**
 * The Key Difference — this Binding
 * This is the most important concept for interviews.
 */
// Traditional function — `this` depends on who calls it
function Timer() {
  this.seconds = 0;
  setInterval(function () {
    this.seconds++;           // ❌ `this` is undefined (or window)
    console.log(this.seconds);
  }, 1000);
}

// Arrow function — `this` is inherited from the surrounding scope
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;           // ✅ `this` refers to Timer instance
    console.log(this.seconds);
  }, 1000);
}
//Arrow functions do not have their own this — they inherit it from the enclosing lexical scope.

//====================================================

// When TO Use Arrow Functions
// ✅Scenario                  Example
// Array methods               .map(), .filter(), .reduce()
// Callbacks                    setTimeout, 
// Short, simple functions      One-liners
// When you need lexical this   Inside class methods with callbacks

//====================================================

// When NOT To Use Arrow Functions
// ❌Scenario                  Example
// Object methods               obj.method = () => { ... }
// Constructor functions        function Person() { this.name = 'Alice'; }
// When you need dynamic this   Event handlers, object methods

js// 1. Object methods — `this` won't refer to the object
const user = {
  name: "Raj",
  greet: () => `Hi, I'm ${this.name}` // ❌ `this` is undefined here
};

// 2. Constructor functions — arrow functions can't be used with `new`
const Person = (name) => { this.name = name; }; // ❌
const p = new Person("Raj"); // TypeError

// 3. When you need `arguments` object
const showArgs = () => console.log(arguments); // ❌ not available

// 4. addEventListener where `this` should be the element
btn.addEventListener('click', () => {
  console.log(this); // ❌ not the button element
});

//====================================================

// Quick Cheat Sheet
// Feature                          Regular Function                     Arrow Function
// Syntax                           function fn() {}                     const fn = () => {}
// this binding                     Dynamic (caller)                     Lexical (surrounding scope)
// arguments object                 ✅ Yes                               ❌ No
// Used as constructor              ✅ Yes                               ❌ No
// prototype property               ✅ Yes                               ❌ No
// Best for                         Methods, constructors                Callbacks, array ops

//====================================================


