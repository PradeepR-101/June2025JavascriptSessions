let user = {
    name: 'pradeep',
    age: 30,
    status: 'active',
    isActive: true,
}

let userkeys = Object.keys(user);
console.log(userkeys);
console.log(userkeys.length);

let uservalues = Object.values(user);
console.log(uservalues);
console.log(uservalues.length);

let pair = Object.entries(user);
console.log(pair);
console.log(pair.length);

//print the key on the basis of value
for (let e in user) {
    if (user[e] === 'pradeep') {
        console.log(e);
    }
}


