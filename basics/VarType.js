var a = 10; //global variable
//scope: function scope
function test() {
    var a = 20;
    console.log(a);//20
    if (true) {
        var a = 30;
        console.log(a);//30
    }
    console.log(a);//30
}

test();//calling test function
console.log(a);//10

var number = 10;
var number = 20;
console.log(number);//20

console.log("=======");
var browser = 'chrome';
var browser = 'firefox';
//redeclaration is allowed

var t = 10;
t = 20;
//reassignment is allowed

console.log("=======");

//hoisting:before declaring the var, you are trying to use the same variable
console.log(num);//undefined
var num = 10;
// console.log(num);//10


console.log("====let concept===");
//let: block scope

let b = 20; //global variable
let pop = 60;//global var
function rest() {
    console.log(pop);//60
    //console.log(b);//hoisting -- error
    let b = 30;
    console.log(b);//30
    if (true) {
        let b = 40;
        console.log(b);//40
    }
    if (true) {
        let b = 1;
        console.log(b);
    }
    console.log(b);//30
}

//console.log(b);//20
rest();//calling the function

console.log("================");

// console.log(age);
// let age = 30;

console.log("================");

let m = 10;
//let m = 20;//redeclaration is not allowed with let
m = 40;
//reassignmemnt is allowed
console.log(m);

console.log("================");

// console.log(os);
// let os = "windows";

//lang = "javascript";
// i = 10;
// console.log(i);

let pest;
pest = 100;
console.log(pest);//undefined


console.log("=======const..values=========");
// const t2 = 10;
// t2 = 20;
// console.log(t2);

const days = 7;

const salary = 100;
console.log(days * salary);

const homePageTitle = "Account Login";

if (true) {
    console.log('hello world');
}
