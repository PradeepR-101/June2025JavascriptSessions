//extract values from the array/objects and assign them to variables.

//Destructuring lets you unpack values from arrays or properties from objects into distinct variables.

// Array Destructuring
// Unpacks values by position.

let products = ['macbook', 'keyboard', 'imac'];

// Without destructuring
const first = products[0];
const second = products[1];

// With destructuring
let [a, b, c] = products;

console.log(a);
console.log(b);
console.log(c);

let [first, ,third] = products;
console.log(first);//macbook
console.log(third);//imac

let [x = 'sim', y, z, p='mouse'] = products;
console.log(x);
console.log(y);
console.log(z);
console.log(p);

let login = ['admin', 'admin123'];
let [username = 'naveen', password] = login;
console.log(username);
console.log(password);

let numbers = [1, 2, 3, 4, 5];
let [head, ...tail] = numbers;
console.log(head);
console.log(tail);


console.log('===============');

let person = {
    name: 'tom',
    age: 30,
    salary: 12.33,
    isActive: true
};

// Without destructuring
const name = person.name;
const age = person.age;

// With destructuring
let { name, age, salary } = person;

console.log(name);
console.log(age);
console.log(salary);

//renaming
// let { name: personname, age: personage, salary:personsalary } = person;

// console.log(personname);
// console.log(personage);
// console.log(personsalary);

// let { name: myName } = person;
// console.log(myName);

//default values
let { name, age, salary, isActive, city = 'LA' } = person;
console.log(name);
console.log(age);
console.log(salary);
console.log(isActive);
console.log(city);


//rest properties
const { name, ...rest } = person;
console.log(rest); // { age: 30, salary: 12.33, isActive: true};


console.log("=============");

let user = {
    name: 'pradeep',
    age: 30,
    city: 'pune',
    isPermanent: true
};

//design
function getInfo({ name, isPermanent }) {
    console.log(name);
    console.log(isPermanent);
}

function getDetails({ name, city }) {
    console.log(name);
    console.log(city);
}

function getName({ name }) {
    console.log(name);
}


//calling the function
getInfo(user);//call by ref
getDetails(user);
getName(user);

//===============

// Destructuring in function parameters
// Array
function getFirst([first]) {
  return first;
}

// Object
function greet({ name, age = 18 }) {
  return `Hi ${name}, age ${age}`;
}

greet({ name: 'Alice' }); // "Hi Alice, age 18"