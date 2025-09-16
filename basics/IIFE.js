//IIFE - Immediately invoked function expression: no name - anonymous function
//this doesnt support function expression
//but i can return something from IIFE
//we have to store in a variable if we return something from IIFE
(function () {
    console.log('start the server');
})();


(function (name) {
    console.log('start the server: ' + name);
})('tomcat');


/**
 * 
 */
let newEmpName = (function (empName) {
    console.log('emp name is :' + empName);
    return empName.toUpperCase();
})('subodh');

console.log(newEmpName);
