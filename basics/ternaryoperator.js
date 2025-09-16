//condition ? expressionIfTrue : expressionIfFalse

let age = 5;
let result = age > 18 ? 'Adult' : 'Minor';
console.log(result);

let a = 10;
a > 5 ? console.log('hiii') : console.log('bye');

let browser = 'opera';
browser === 'chrome' ? console.log('run chrome') : browser === 'firefox' ? console.log('run firefox') : console.log('no browser found');

let isLoggedIn = false;
isLoggedIn ? showDashboard() : redirectToLogin();


function showDashboard() {
    console.log('welcome to Dashboard');
}

function redirectToLogin() {
    console.log('go to login page');
}