class Vehicle{
    speed = 50;

    constructor() {
        console.log('vehicle const...');
    }

    loading() {
        console.log('Vehicle -- loading...');
    }
}

class Car extends Vehicle{
    constructor() {
        super();
        console.log('car -- const..');
    }
    speed = 100;

    start() {
         console.log('car -- start');
    }   
    stop() {
         console.log('car -- stop');
    }
    refuel() {
         console.log('car -- refuel');
    }

    //override
    loading() {
        console.log('Car -- loading...');
    }

    static billing() {
        console.log('car -- billing');
    }
}

class BMW extends Car{

    constructor() {
        super();
        console.log('bmw - const..');
    }

    speed = 200;

    //overriden
    start() {
        console.log(super.speed);//undefined
        super.start();
        console.log('BMW -- start');
        console.log(this.speed);
    }

    //individual
    autoParking() {
         console.log('BMW -- autoParking');
    }

    //override
    loading() {
        console.log('BMW -- loading...');
    }
    
    // static billing() {
    //     console.log('BMW -- billing');
    // }

}


class Cycle{
    testing() {
        console.log('cycle testing');
    }
}

export { Car, BMW };