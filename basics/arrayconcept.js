//Array: collection of multiple elements in the signle variable
//[]
//10 20 30 40

let n = []; //empty array
console.log(n.length);
console.log(n);

let arr = [10, 20, 30, 40];//Array Literals: 0-3: 4
console.log(arr.length);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[-1]);

//mixed data types:
let empData = ['manisha', 30, 23.33, true, 'f'];//0-4: 5
console.log(empData.length);
console.log(empData);

//using the Array Constructor:
let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);//0-4: 5
console.log(test);
console.log(test[0]);

//dynamic array:  JS arrays are dynamic in nature

console.log('---------');
let num = [1, 2, 3];//3
console.log(num.length);
num.push(4);//add at the end
console.log(num);
num.push('chrome', 'firefox');//can push multiple values 
console.log(num);

//add to the beginning:
num.unshift('firefox');
console.log(num);

console.log('----remove-----');
//remove the element:
let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);
//remove from the end: using pop():but only one value at a time
browser.pop();
console.log(browser);

console.log('---------');


//remove from the beginning: using shift():
let removed = browser.shift();
console.log(removed);//chrome
console.log(browser);

removed = browser.shift();
console.log(removed);//firefox
console.log(browser);


console.log('---------');
//print all the values from an array: using loops:

let myBrowser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];//0-4: 5
console.log(myBrowser);//

//1. index for loop:
for (let i = 0; i < myBrowser.length; i++){
    console.log(myBrowser[i]);
    if (myBrowser[i] === 'opera') {
        console.log('this browser is not supported now..');
        break;
    }
}

console.log('---------');

//2. for ... of loop: print the value
for (let ele of myBrowser) {
    console.log(ele);
    if (ele === 'safari') {
        console.log('run it in headless mode');
        break;
    }
}

console.log('---------');

let emp = ['ravi', 'abhi', 'pooja', 'dinesh', 'sandeep'];//0-4:5
for (let i = emp.length - 1; i >= 0; i--){
    console.log(emp[i]);
}

//print in the reverse order using for ...of loop

console.log('---------');
let userData = ['ravi', 'abhi', 'pooja', 'dinesh', 'sandeep'];//0-4:5

//for ... in loop: print the index
for (let ele in userData) {
    console.log(ele +" = " + userData[ele]);
}

//reverse:
userData.reverse();
console.log(userData);

//join:
let words = ['hello', 'playwright', 'with test', 'automation'];
let sentence = words.join(' ');
console.log(sentence);
//array to csv data

console.log('---------');
//copying and combining: using ... (spread operator)
let first = [1, 2, 3];
let second = [...first];
console.log(second);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

let result = arr1.concat(arr2,arr3);
console.log(result);



// console.log([] == 0); // []->""->0 == 0=true
// console.log([] == []); // false


