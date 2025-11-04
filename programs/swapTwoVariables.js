


let a=10;
let b=20;

//with using 3rd variable
let temp=a;
a=b;
b=temp;

//with using array destructuring
[a,b] = [b,a]

//without using 3rd variable
a=a+b; //30
b=a-b; //10
a=a-b; //20
//or
a=a*b;
b=a/b;
a=a/b;

console.log('a = '+a)
console.log('b = '+b)