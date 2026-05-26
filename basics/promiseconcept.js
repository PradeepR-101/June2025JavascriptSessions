//A Promise is an object that represents eventual completion (or failure) of an asynchronous operation. 

//It has three states:
//pending
//fulfilled - resolved -- it will be given to then()
//rejected - error ---> it will be givem to catch()

//"A Promise is a JavaScript object that handles asynchronous operations. 
// We can handle it using .then()/.catch() or async/await with try/catch."
//Promises solve callback hell (deeply nested callbacks)

let myPromise = new Promise((resolve, reject) => {
    console.log('start the promise....');
    let success = false;
    if (success) {
        resolve('training is done!!');
    }
    else {
        reject('failed!!');
    }
});

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

//error promise:
let errorPromise = new Promise((resolve, reject) => {
    reject('oopSS...something got failed....')
});

errorPromise.catch(error => {
    console.log(error);
});

//result promise:
let resultPromise = new Promise((resolve, reject) => {
    resolve(100);
});

resultPromise.then(result => {
    console.log(result);
})


//
let cakePromise = new Promise((resolve, reject) => {
    console.log('start making the cake....');
    let success = false;
    if (success) {
        resolve('cake is ready!!');
    }
    else {
        reject('sorry, i was sick!!');
    }
});
cakePromise
    .then(result => {
    console.log(result);
    })
    .catch(error => {
    console.log(error);
    })
    .finally(() => {
        console.log('lets have party!!');
    }).finally(() => {
        console.log('bye!!');
    })

//chaining promises: this function is returning a promise - resolve
function doubleAmountAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    })
}

//call the function:
doubleAmountAfter2Seconds(5)
    .then(result => {
        console.log(result);//10
        return doubleAmountAfter2Seconds(result);//10
    }).then(result => {
        console.log(result);
    })


//Promise.all():
//wait for all promises to resolve or reject, if it sees any reject -- stop execution 
let promise1 = new Promise((resolve, reject) => {
    resolve('promise 1 is resolve');
})    

let promise2 = new Promise((resolve, reject) => {
    reject('promise 2 is resolve');
}) 

let promise3 = new Promise((resolve, reject) => {
    resolve('promise 3 is resolve');
}) 

Promise.all([promise1, promise2, promise3])
    .then(result => {
        console.log(result);
        console.log('all promises are done...');
    })
    .catch(error => {
        console.log(error);
        console.log('FAILED....');
    }).finally(() => {
        console.log('task is done!!!');
    });


//Promise.race():
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 is done.....')
    }, 4000);
})    


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p2 is reject.....')
    }, 1000);
}) 


let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 is done.....')
    }, 2000);
}) 

// Promise.race() will return the result of the first promise that settles (either resolves or rejects).
// In this case, p2 will reject first, so the catch block will execute with the error message from p2.
Promise.race([p1, p2, p3])
    .then(result => {
                    console.log(result);
    }).catch(error => {
                    console.log(error);
                }) //p2 is reject


// Always mention why Promises exist (to avoid callback hell), 
// how they work (3 states), and 
// how you use them (async/await preferred in modern JS)