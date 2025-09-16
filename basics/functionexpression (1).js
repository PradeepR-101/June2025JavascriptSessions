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