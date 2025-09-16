//named function: resuable code/factory

//1. simple function: has no input and no return
function test() { //0 param
    console.log('test function');
}

//call the function:
test();

function sum() {
    console.log('sum function');
    let a = 10 + 20;
    console.log(a);
}

sum();

//function hositing
rest();
function rest(){
    console.log('im taking rest');
}

//2. function: some input but no return:
function add(a, b) {//two params
    console.log('adding two numbers');
    let c = a + b;
    console.log(c);
}

add(10, 20);//call by values/arguments

console.log('-------------');


/**
 * 
 * @param {string} name 
 */
function getTrainerName(name) {
    console.log('my trainer name is ' + name);
    console.log(name.toUpperCase());
}

getTrainerName('naveen');

console.log('-----------');

//3. function: some input and some return:
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function addition(a,b) {//two params, returns: sum of two numbers
    console.log('sum of two numbers');
    let sum = a + b;
    return sum;
}

console.log(addition(100, 200));

let s = addition(200, 300);
console.log(s);//500
if (s <= 500) {
    console.log('pass');
}


//AC: create a function which will take a param
//param: browserName (string): chrome/firefox/edge/sfari
//return: true/false
//return true: if browser is available
//return false: if browser is not available, and print invalid browser

/**
 * 
 * @param {string} browserName 
 */
function launchBrowser(browserName) {
    console.log('browser name is : ' + browserName);
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched');
            return true;
        case 'firefox':
            console.log('ff is launched');
            return true;
        case 'edge':
            console.log('edge is launched');
            return true;
        case 'safari':
            console.log('safari is launched');
            return true;
        default:
            console.log('invalid browser :' + browserName);
            return false;
    }
}

let isBrowserLaunched = launchBrowser('chrome');
console.log(isBrowserLaunched);
if (isBrowserLaunched) {
    console.log('enter the url');
}
