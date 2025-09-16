console.log(10 == 10);

let a = 30;
let b = 20;
if (a > b) {
    console.log('pass');
}
else {
    console.log('fail');
}
//dead code, unreachable code
if (false) {
    console.log('bye!!');
}
else {
    console.log('hello!!');
}

let isElementDisplayed = false;

if (isElementDisplayed) {
    console.log('click on the element');
}
else {
    console.log('wait for the element');
}

console.log("==============");
//compare: == vs ===
//==: loose equality: value
//===: strict equality: value + type

let n1 = 10;//number
let n2 = "10";//string
console.log(n1 == n2);
console.log(n1 === n2);

console.log(true == 1);
console.log(true === 1);

console.log(false == 0);
console.log(false === 0);

console.log("" == 0);//0==0=true
console.log("" === 0);//false

console.log([] == 0);//0==0=>true

//special case: interview ques:
console.log(null == undefined); //true

console.log(typeof (null));//object
console.log(typeof (undefined));//undefined

console.log(null === undefined);//object === undefined=>false

if (null === undefined) {
    console.log('hi click on the element');
}
else {
    console.log('close browser');
}

