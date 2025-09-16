async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('fetching data....');
            resolve(100);
        }, 2000);
    })
}

//calling now:
let data = await fetchData();
console.log(data);

//**************** */

async function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: 'vikas' });
        }, 1500);
    })
}

let user = await getUser();
console.log(user);

//**************** */
//return: array of orders object
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

let orders = await getOrders();
console.log(orders);

