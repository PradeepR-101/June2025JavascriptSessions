class Person{
    // name;
    // age;
    //const.. will be called when we create the object of this class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }    

    /**
     * 
     * @param {number} speed 
     */
    drive(speed) {
        console.log(`${this.name} is driving at ${speed} km/hr`);
    }

    getAddress() {
        return 'bangalore, india';
    }

    walking = function() {
        console.log(`${this.name} is walking`);
    }

    getInfo = ()=>{
        console.log('some information : Devi Sharma....');
    }

}

//create the object of this class: using new keyword

let p = new Person('peter');
console.log(p);

let p1 = new Person('Devi', 30);
console.log(p1.name);
console.log(p1.age);
console.log(p1);

p1.drive(120);

let address = p1.getAddress();
console.log(address);

p1.walking();
p1.getInfo();



// let p2 = new Person();
// console.log(p2.name);
// console.log(p2.age);
// console.log(p2);

//new Person('tom', 35);//gc





class Util{
    static timeOut = 10;

    static readExcelData() {
        console.log('reading data from excel...');
    }

    writeData() {
        console.log('writing data into a file...');
    }
}

let ut = new Util();
ut.writeData();
//static vars/methods will be called by using the classNAme:
console.log(Util.timeOut);
Util.readExcelData();
//ut.readExcelData();//error
//Util.writeData();//error


// let ut1 = new Util();


