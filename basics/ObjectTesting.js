//creating the obejct using the class: latst JS: Es6
class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

//create the object of Product using new keyword:
//const.. will be called when you create the object
let p1 = new Product('macbook', 1000);
console.log(p1.name);
console.log(p1.price);

//create an object without a reference name:
new Product('iphone11', 500);
new Product('samsung', 1500);

let p2 = new Product('keyboard', 200);
console.log(p2);
p2.color = 'red';
console.log(p2);

//there is no gc method in JS:

//creating the object withouht any ref:
let myName = new Product('mouse', 100).name;
console.log(myName);//mouse

let myPrice = new Product('mouse', 100).price;
console.log(myPrice);
