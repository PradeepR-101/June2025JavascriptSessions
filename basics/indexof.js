let numbers = [1, 2, 3, 4, 5];
let n = numbers.indexOf(2);
console.log(n);

let mesg = ['hi', 'this', 'is', 'javascript', 'code'];
let m = mesg.indexOf('this');
console.log(m);

let p = mesg.indexOf('naveen');
console.log(p);

if (mesg.indexOf('naveen') === 3) {
    console.log('pass');
}
else {
    console.log('fail');
}

console.log(mesg.includes('coding'));

// let message = ['hi', 'this', 'is', 'javascript', 'this', 'code', 'automation', 'this'];
// let n1 = message.indexOf('this');//1st occurrenceof 'this' --- 1
// console.log(n1);//1

// //2nd occurrenceof 'this'
// let n2 = message.indexOf('this', n1 + 1);
// console.log(n2);

// //3rd occurrenceof 'this':
// let n3 = message.indexOf('this', n2 + 1);
// console.log(n3);



let message = ['hi', 'naveen', 'is', 'javascript', 'naveen', 'code', 'automation', 'naveen'];

//1st occurrence of naveen:
console.log(message.indexOf('naveen'));//1

//2nd occurrence of naveen:
console.log(message.indexOf('naveen', message.indexOf('naveen')+1));//4

//3rd occurrence of naveen:
console.log(message.indexOf('naveen', message.indexOf('naveen', message.indexOf('naveen')+1)+1));

//10th: 

//while loop/for loop: to get the occurrence of naveen


console.log([] == 0);//true: []->''->0==0 true
console.log([] == []);//false







