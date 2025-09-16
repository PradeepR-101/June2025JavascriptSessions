//An object is collection of properties: key-value pair format
//key - string
//value - anything
let user = {
    name: 'abhi',
    age: 30,
    status: 'active',
    isEmployed: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.city);//undefined
console.log(user);
console.log(user['status']);


//add more prop:
user.city = 'LA';
console.log(user.city);
//delete a prop:
delete user.isEmployed;
console.log(user);

console.log(user.isEmployed);//undefined
if (user.name === 'abhi') {
    console.log("pass");
}
user.age = 40;
console.log(user);

console.log("---------------");
//iterate the object properties:
//using for...in loop:
let car = {
    name: 'bmw',
    price: 40,
    model: 'x1',
    color: 'red',
}

for (let key in car) {
    console.log(key +':'+ car[key]);
}


//
let person = {
    name: 'tom',
    age: 30
}

person = null; //null ref object
console.log(person.name);//null.name: error


