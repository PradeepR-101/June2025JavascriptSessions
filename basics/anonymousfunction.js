//function without name


let say = function() {
    console.log('hello world');
}
say();


let add = function(a, b) {
    return a + b;
}
let s1 = add(10, 20);
console.log(s1);

console.log(add.name);

console.log('==========');

/**
 * 
 * @param {string} browserName 
 */
let isBrowserLaunched = function(browserName) {
    console.log('browser name : ' + browserName);
    
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
    
        default:
            console.log('invalid browser : ' + browserName);
            return false;
    }
}

if (isBrowserLaunched('chrome')) {
    console.log('enter the app url');
}




