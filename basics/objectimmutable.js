//freeze vs seal

let user = {
    name: 'naveen',
    city: 'LA'
}

console.log(user);
console.log(typeof(user));//object

//1. freeze():
//Object.freeze(user); //makes object immutable: can not add/update/delete anything
//user.salary = 30;//add a new prop
//user.city = 'SFO';//updating the prop
//delete user.city; //deleting the prop
//console.log(user);


//2. seal(): it will allow modifications, but wont allow adding/removing
Object.seal(user);
user.city = 'SFO';
console.log(user);
// user.salary = 30;//not allowed
// console.log(user);
//delete user.name;//not allowed
