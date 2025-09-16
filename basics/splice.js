//splice: add/remove elements at spefici location

//array.splice(start, deleteCount, item1, item2, ...);

let cart = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

//remove 1 element at index 2
let removed = cart.splice(2, 1);
console.log(removed);
console.log(cart);

let cart1 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
//remove 3 elements starting from index 2
cart1.splice(2, 3);
console.log(cart1);


let cart2 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
//remove from the end : negative index:
//remove the last 2 elements:
cart2.splice(-2, 2);
console.log(cart2);


//array.splice(start, deleteCount, item1, item2, ...);
//adding more elements:
let cart3 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
//add single fruit at index 1
cart3.splice(1, 0, 'mango');
console.log(cart3);

//add multiple elements:
let numbers = [4, 5, 6];
numbers.splice(0, 0, 1, 2, 3);
console.log(numbers);

//replace:
let days = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday'];
//replace wednesday --> partyday
days.splice(2, 1, 'partyday');
console.log(days);

//replace:
let months = ['jan', 'feb', 'march', 'april', 'may', 'jun'];
//replace 3 elements with 3 elements
//'march', 'april', 'may' --> 'Spring', 'Summer', 'Holidays'
months.splice(2, 3, 'Spring', 'Summer', 'Holidays');
console.log(months);

let product = ['macbook', 'samsung', 'canon', 'ikea', 'iphone'];
product.splice(3, 2, 'apple');
console.log(product);



let data = ['macbook', 'samsung', 'canon', 'ikea', 'iphone'];

// let count = data.length - 1;
// for (let ele of data) {
//     console.log(data[count]);
//     count--;
// }

console.log('==========');
let counter = data.length - 1;//4
for (let e in data) {
    e = counter;//4
    console.log(data[e]);
    counter--;
}





let cart5 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
//remove 3 elements starting from index 2
cart5.splice(cart5.length, 0,'peru');
console.log(cart5);

let testing = new Array(10);
console.log(testing.length);