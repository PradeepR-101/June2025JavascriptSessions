async function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: 'vikas' });
        }, 1500);
    })
}

async function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { orderId: 101, item: 'Laptop' },
                { orderId: 102, item: 'Keyboard' }
            ])
        }, 2000)
    })
}


//case1: 
//run these two methods in parallel mode:
//2 tasks: parallel execution:
// let myUser = getUser();//1.5
// let MyOrders = getOrders();//2
//these are the promises

// //after resolved, fetch the value using Promise.all()
// // let [user, orders] = await Promise.all([myUser, MyOrders]);
// // console.log(user);
// // console.log(orders);

// let data = await Promise.all([myUser, MyOrders]);
// console.log(data);

// //total time taken: max(1.5, 2) --> 2 secs

//case2: if I use await -- Sequential execution
let myUser = await getUser();//1.5 ---> 1.5
let myOrders = await getOrders();//2 ---> 2
let data = await Promise.all([myUser, myOrders]);
//Total time take: 1.5+2 = 3.5 secs
console.log(data);

//******************** */


//case 3. dont wait for anything, just proceed: dont use await while calling

async function sendEmailNotification(emailId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`email has been sent to ${emailId}`);
            resolve(true);
        }, 5000);
    })
};

//calling it:
let flag = sendEmailNotification('Aditya_testing@mail.com');//dont wait --5 secs

console.log('checkout the order...DONE!!!!');

flag.then(res => {
    console.log(res);
})


// async function enterURL(url) {
//     //checks
//       await page.goto(url);
// }

