let numebrs = [1, 2, 3, 4, 5];
let newNum = numebrs.map(ele => ele + 5);
console.log(newNum);
console.log(numebrs);

let myNum = numebrs.map(ele => ele * ele);
console.log(myNum);

let words = ['hello', 'world', 'javascript', 'playright'];
let upper = words.map(ele => ele.toUpperCase());
console.log(upper);

//get the first letter of each word:
let firstLetter = words.map(ele => ele[0]);//hello->h
console.log(firstLetter);

//hello! world!
let newWords = words.map(ele => ele + '!');
console.log(newWords);

let links = ['help', 'contact', 'music', 'prime', 'price'];
let footerLinks = links.map(ele => 'amazon ' + ele);
console.log(footerLinks);

