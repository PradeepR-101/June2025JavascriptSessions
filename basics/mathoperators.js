//addition (+)/ concat
console.log(1 + 1);
console.log(1 + '1');//concat will happen
console.log('1' + '1');

//- subtraction
console.log(1 - '1');//convert string to number--> '1' --> 1-->1-1=0
console.log('5' - 2);//5-2=3
console.log('5' - '2');//5-2=3
console.log(5 - 'hello');//NaN - not a number
console.log('naveen' - 10);//NaN
console.log('naveen' - 'automation');//NaN


//* Multplication
console.log(2 * 3);
console.log('2' * 3);//2x3=6
console.log('2' * '3');//2x3=6
console.log('naveen' * 'automation' - '2');//NaN

let price = '1000';
console.log(price + 5);//concat: 10005
console.log(price - 5);//'1000'-5==>1000-5=995

// / division:
console.log(6 / 2);
console.log('6' / 2);//6/2=3
console.log('6' / '2');//6/2=3
console.log(9 / 2);//4.5
console.log(9.0 / 2);//4.5
console.log(9 / 2.0);
console.log(9 / 0);//Infinity
console.log(0 / 9);//0
console.log(0 / 0);//NaN
console.log(0.0 / 0);//NaN
console.log(0.0 / 0.0);//NaN

//Modulus % -remainder
console.log(8 % 2);//0
console.log(9 % 2);//1
console.log('8' % 2);//8%2=0
console.log('9' % '2');//9%2 = 1

console.log('800' + '200');//800200

//power - exponential: **
console.log(2 ** 3);
console.log(3 ** '2');//3^2 = 9

//+ : UnaryPlus operator
console.log(+'42' + 5);//convert string to number
console.log(+'800' + +'200');//800 + 200=1000

//-: Unary negation opeartor
console.log(-'42'+1);//-42+1=-41
console.log(-'hello');//NaN
console.log(+800 + 200);//1000


//console.log(++100);//100+1
console.log(+'100');//string to number conversion: '100'-->100




