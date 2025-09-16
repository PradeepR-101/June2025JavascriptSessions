class Car{
    //name - public
    //price - private
    #price;
    constructor(name, price) {
        this.name = name;
        this.#price = price;
    }

    //public
    testDrive() {
        console.log(this.#price);
    }

    //public getter
    getPrice() {
        return this.#price;
    }

    //public setter
    setPrice(price) {
        this.#price = price;
    }

    //OOP: Encapsulation: private data of a class can be accessed using public method
}

let c1 = new Car('BMW', 40);
console.log(c1.name);
//console.log(c1.#price); -- error coz of private(#)
c1.testDrive();



c1.setPrice(60);
let price = c1.getPrice();
console.log(price);
