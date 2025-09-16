//object: object reference name
//propeties: key-value
//function(behaviour) - action

let user = {
    name: 'subodh',
    age: 30,
    salary: 34.55,
    devices: ['sim', 'mobile'],

    coding: function code() {
        console.log(`${this.name} is writing the code using js`);
    },

    printing(ctc) {
        console.log('your current ctc is : ' + ctc);
        let finalSal = ctc + this.salary;
        return finalSal;
    },

    /**
     * 
     * @param {string} sportsName 
     */
    playing: function (sportsName) {
        console.log(`${this.name} is playing ${sportsName}`);
    },

    /**
     * 
     * @param {number} speed 
     */
    walking: (speed) => {
        console.log(`${user.name} is walking with ${speed} km/hr`);
    }, 



};

console.log(user.name);
console.log(user['age']);
console.log(user.salary);
user.coding();
user['coding']();
let sal = user.printing(20);
console.log(sal);
user.playing('cricket');
user.walking(10);
console.log(user.devices);

console.log('-----------');

let loginPage = {
    emailIdXpath: `//input[@id='username']`,
    passwordXpath: `//input[@id='password']`,
    loginBtnXpath: `//input[@id='login']`,
    
    /**
     * 
     * @param {string} username 
     * @param {string} password 
     */
    loginToApp(username, password) {
        console.log(`entering ${username} into element : ${this.emailIdXpath}`);
        console.log(`entering ${password} into element : ${this.passwordXpath}`);
        console.log(`click on login button using element : ${this.loginBtnXpath}`);
        console.log(`login is done using : ${username} and ${password}`);
        console.log(user.name + ":" + user.age);
        
        user.coding();
    },

};

loginPage.loginToApp('subodh@gmail.com', 'subodh@123');


let t = 10;
console.log(`the value of t is ${t}`);

