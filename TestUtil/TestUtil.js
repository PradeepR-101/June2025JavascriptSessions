let age = 30;
console.log('hello world!!'); //top level - outside of the class, somewhere in the js file
//it will be exported automatically

class TestUtil{
    
    static count = 0;

    //static block:
    static {
        console.log('static block....1');
    }

    static {
        console.log('static block....2');
    }

    //NS --> NS: use this keyword
    //public method
    readData() {
        console.log('reading data...');
        this.#readCellData();
    }

    writeData() {
        console.log('writing data');
        this.readData();
    }

    //private method:
    #readCellData() {
        console.log('reading cell data');
    }

    //S --> S: USing the class name
    static print() {
        console.log('printing...');
        TestUtil.drive();
    }

    /**
     * 
     * @param {TestUtil} tu 
     */
    static drive(tu) { //tu=u1
        console.log('driving...');
        //S -> NS: 
        
        //1. create the object of the class and access NS methods
        // let t1 = new TestUtil();
        // t1.readData();

        //2. call by ref concept
        tu.readData();
        tu.#readCellData();
    }

}

export { TestUtil, age };




//S->S: using Class name
//NS -> NS: using this keyword
//NS --> S: using Class name
//S --> NS: create the object/use call by ref    
