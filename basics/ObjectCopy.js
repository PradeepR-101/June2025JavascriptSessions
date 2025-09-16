let user = {
    name: 'naveen',
    city: 'LA'
};

let person =  { ...user };

console.log(person);
person.city = 'pune';

console.log(person);
console.log(user);

let u1 = {
    name: 'tom',
    age: 30
}

let u2 = u1;
console.log(u1);
console.log(u2);
u2.age = 50;
console.log(u1);
console.log(u2);
