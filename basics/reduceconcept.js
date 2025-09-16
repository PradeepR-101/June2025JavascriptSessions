let numbers = [1, 2, 3, 4, 5]; //total = 0, total = total+num=1+2=3+3=6+4=10+5=15
//sum of all numbers: 15

let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

//multiple all numbers: 120
let multiply = numbers.reduce((total, num) => total * num, 1);
console.log(multiply);

let dict = ['hello', 'javascript', 'playwright'];
//hello javascript playwright
let newDict = dict.reduce((result, ele) => result + ' ' + ele);
console.log(newDict);

//hello,javascript,playwright
newDict = dict.reduce((result, ele) => result + ele + ',', '');//
console.log(newDict);

let marks = [85, 90, 78, 92, 88]; //85+90+78+92+88/5 = 
let avg = marks.reduce((sum, ele) => sum + ele, 0) / marks.length;
console.log(avg);

