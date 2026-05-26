//"A function expression is when a function is assigned as a value to a variable,
// rather than being declared as a standalone statement."
//function expression: is a function that is stored as a valur in a variable. It can be anonymous or named function.

let testing = function getTrainer() {
    console.log('get the trainer details');
}

//calling the function:
testing();//correct
//getTrainer();//Error

console.log(testing.name);//getTrainer

//function expression with params:

let add = function addingTwoNumbers(a, b) {
    let sum = a + b;
    return sum;
}

let s1 = add(10, 20);
console.log(s1);
console.log(add.name);

console.log('--------------');


/**
 * 
 * @param {string} browserName 
 */
let launchBrowser = function openBrowser(browserName) {
    
    console.log('browser name is : ' + browserName);
    
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched');
            return true;
        case 'firefox':
            console.log('firefox is launched');
            return true;
    
        default:
            console.log('invalid browser ' + browserName);
            return false;
    }


}


if (launchBrowser('ie')) {
    console.log('enter url');
}
else {
    console.log('no need to enter url');
}

//"Function declarations are hoisted, so they can be called before they're defined. 
// but Function expressions are not hoisted."

//"Arrow functions are a shorter syntax for function expressions, and they also don't have their own this."

//Give a Real-World Use Case
[1, 2, 3].map(x => x * 2); // callbacks

setTimeout(function() {    // async operations
  console.log("done");
}, 1000);

//"Function expressions are commonly used as callbacks, in event handlers, or when you need to conditionally assign a function."