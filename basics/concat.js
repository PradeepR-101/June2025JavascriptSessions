let a = 100;
let b = 200;

console.log(a + b);
console.log(a - b);
console.log(b / a);
console.log(a * b);

let x = 'hello';
let y = 'playwright';
console.log(x + y);
console.log(a + b + x + y);//300helloplawyright
console.log(x + y + a + b);//helloplaywright100200
console.log(x + y + (a + b));//helloplaywright300
console.log(a + b + x + y + a + b);//300helloplaywright100200
console.log(a + b + x + y + (a + b));//300helloplaywright300

console.log('the value of a is : ' + a);
console.log('the value of b is : ' + b);
console.log('the sum is: '+ (a+b));

console.log(true + 'hello' + false);
console.log(12.33 + 12.44 + x + y + a + b);

console.log('naveen' + +'testing');//naveenNaN






