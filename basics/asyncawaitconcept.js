function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if (success) {
                resolve('Naveen');
            }
            else {
                reject('404 not found...');
            }
        }, 3000);
    })
};

//calling the function -- returns promise
// getUser().then(user => {
//     console.log(user);
// }).catch(error => {
//     console.log(error);
// });

async function showUserDetails() {
    try{
    console.log("getting user info....");
    let user = await getUser(); //user will be updated only when promise is resolved
    console.log("USer: " + user);
    }
    catch (error) {
    console.log(error);
    }
}

showUserDetails();
