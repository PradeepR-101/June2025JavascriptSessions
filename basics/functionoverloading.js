//function overloading is not possible in JS


// function login() {
//     console.log('login to app1');
// }

// function login(a) {
//     console.log('login to app2' + a);
// }


// login(10);
//SyntaxError: Identifier 'login' has already been declared
//JS ES6 -- 2015

//login with:
//1. nothing 0 
//2. un/pwd 2
//3. un, pwd, otp 3

// function login() {
//     console.log('login to app');
// }

// function loginWithUsernamePassowrd(un, pwd) {
//     console.log('login with: '+ un + pwd);
// }

// function loginwithusernamepasswordotp(un, pwd, otp) {
//     console.log('login with: '+ un + pwd+ otp);
// }

// loginwithusernamepasswordotp('anu', 'anu', 9898);

console.log('===============');


//login with:
//1. nothing 0 
//2. un/pwd 2
//3. un, pwd, otp 3
function login() {
    if (arguments.length === 0) {
        console.log('defualt login to app');
    }
    else if (arguments.length === 2) {
        console.log(`login with : ${arguments[0]} and ${arguments[1]}`);
        
    }
    else if (arguments.length === 3) {
        console.log(`login with : ${arguments[0]} and ${arguments[1]} and ${[arguments[2]]}`);
    }
    else {
        console.log('plz supply the right type of values to login to app');
    }
}

login();
login('admin', 'admin123');
login('naveen', 'pw@123', 9090);
login('admin');

//search:
//1. name
//2. name, price
//3. name, price, color
//4. name, price, color, seller


function myLogin(un = null, pwd = null) {
    if (un && pwd) {
        console.log('login with '+ un + pwd);
    }
    else {
        console.log('not allowed');
    }
}

myLogin('admin');


let lg = function login() {
    console.log('login to app1');
}

let pg = function login(a) {
    console.log('login to app2' + a);
}

lg();
pg(10);