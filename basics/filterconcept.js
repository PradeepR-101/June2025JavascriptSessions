//reduce --

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter(ele => ele % 2 === 0);
console.log(even);

let newNum = numbers.filter(ele => ele > 5);
console.log(newNum);

//num =>3 and num<=7

let myNum = numbers.filter(ele => ele >= 3 && ele <= 7);
console.log(myNum);

let links = ['help', 'contact', 'music', 'prime', 'price'];
//links where length of the links >4
//contact, music, prime, price
let newPro = links.filter(ele => ele.length > 4);
console.log(newPro);

let footer = ['amazon help', 'contact', 'amazon music', 'amazon prime', 'price'];
let amazonList = footer.filter(ele => ele.startsWith('amazon'));
console.log(amazonList);

let marks = [85, 92, 67, 78, 95, 43, 88];
let passingMarks = marks.filter(ele => ele >= 70);
console.log(passingMarks);

let num = [-85, 0, -9,-89, 92, -67, 78, -95, 43, 88];
let finalNum = num.filter(ele => ele > 0).filter(ele => ele > 70);
console.log(finalNum);

let headers = ['amazon help', 'contact', 'amazon music', 'amazon prime', 'price'];
let finalHeader = headers.filter(ele => ele.startsWith('amazon')).filter(ele => ele.includes('prime'));
console.log(finalHeader);


