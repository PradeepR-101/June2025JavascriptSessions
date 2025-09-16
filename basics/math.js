 let pi = 3.14;

 let name = 'tom';
 let age = 30;


 function add(a, b) {
    console.log(a+b);
    return a + b;
 }

let pop = function () {
    console.log('pop');
}

let rest = () => {
    console.log('resting');
}

function print() {
    console.log('hello world!!!');
}

print();//expression
console.log('hello world');//expression

//only one default function, var, object, array you can export
//export defualt prop can be renamed also in the import statment in another class
// export default function tesapi() {
//     console.log('testing my apis...');
// }
//this is not allowed: duplcaite defauls are not allowed
// export default function testui() {
//     console.log('testing my ui...');
// }

let price = 100;
export default price;

export { pi, name, add, pop, rest, print };
    


// console.log(pi);

// console.log(add(10,20));

