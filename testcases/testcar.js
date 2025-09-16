import { Car, BMW } from "../Inheritance/Inheritance.js";

let bm = new BMW();
bm.start();//overriden
bm.stop();//inherited
bm.refuel();//inherited
bm.autoParking();//individual
console.log(bm.speed);//individual speed
bm.loading();

BMW.billing();

console.log("--------");

let cr = new Car();
cr.start();
cr.stop();
cr.refuel();
console.log(cr.speed);//individual speed
Car.billing();
cr.loading();


console.log("--------");
//IS - A Relationship: BMW IS-A CAR IS-A Vehicle; BMW IS-A Vehicle

console.log("--------");
//top casting/down casting in JS: NA

let b1 = new BMW();
let c1 = new Car();

c1 = b1;
console.log(c1.speed);
c1.start();
c1.stop();
c1.refuel();
c1.autoParking();


// let b1 = new BMW();
// b1.start();