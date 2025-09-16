let numbers = [1, 2, 3, 4, 5]; //total = 0, total = total+num=1+2=3+3=6+4=10+5=15
//sum of all numbers: 15

let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

numbers.reduce()