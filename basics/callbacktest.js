//callback : passing the function name to another function as a parameter
//call a function by passing the function name

let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let div = (a, b) => b / a;
let mul = (a, b) => a * b;

//actual calculator function
function calculator(funcName, a, b) {
    console.log('using two numbers ');
   return funcName(a,b);
}

//user is calling this function: calculator
let result = calculator(sum, 10, 20);
console.log(result);

result = calculator(sub, 10, 20);
console.log(result);

result = calculator(div, 10, 20);
console.log(result);

result = calculator(mul, 10, 20);
console.log(result);

console.log("------------");

let addition = function (a, b) {
    return a + b;
}

let substraction = function (a, b) {
    return a - b;
}

let division = function (a, b) {
    return  b /a;
}

let multiplication = function (a, b) {
    return a * b;
}

//actual function: performCalculation
// function performCalculation(a, b, funcName ) {
//     console.log("performing some calculation here with method : "+ funcName.name);
//     return funcName(a, b);
// }

function performCalc(a, b, funcName1, funcName2 ) {
    console.log(funcName1(a, b));
    console.log(funcName2(a, b));
}


//user is calling: 

performCalc(10, 20, addition, division);

console.log("bye!!!!!!");




let res = performCalculation(10, 30, multiplication);
console.log(res);


function summing(a, b) {
    return a + b;
}

function calc(funcName, a, b) {
    return funcName(a, b);
}

let t1 = calc(summing, 10, 30);
console.log(t1);


console.log('===========');

//design a function: never create any arrow/anonymous function body while desiging the function
function doSomething(funcName, url) {
    console.log('entering the url...' + url);
    funcName();
}



//caller: call this function now:
//call by passing callback function body and url value
doSomething(
    () => {
    console.log('hello appp');
    }
    ,
    'http://www.google.com'
); 



// Function defined using arrow function
const performOperation = (a, b, operation) => {
  return operation(a, b);
};

// Call it with an arrow function as parameter
const result1 = performOperation(4, 2, (x, y) => x * y);
console.log(result1);