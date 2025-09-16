//callback hell: pyramid of doom

//callback examples:
function startMachine(callback) {
    console.log('starting the machine....');
    callback();
}

startMachine(() => {
    console.log('done!');
});

startMachine(function () {
    console.log('pass!!');
});

function getInfo(callback){
    console.log('getting some info...');
    callback();
}

getInfo(() => { });

function getDetails(callback) {
    console.log('getting some details....');
    callback(100);
}

getDetails((x) => {
    console.log(x);
});

function getMyDetails(callback) {
    console.log('getting some details....');
    callback('selenium');
}

getMyDetails((x) => {
    console.log(x);
});

//
function getMarks(callback) {
    console.log('hi getting the marks.....');
    callback(200);
    return 500;
}

let t1 = getMarks((num) => {
    console.log(num);
})
console.log(t1);


//
function openPage(url, callback) {
    console.log('app url:' + url);
    let browser = callback('Amazon Login Page');
    console.log(browser);
    return true;
}

let flag = openPage('https://www.amazon.com', (title) => {
    console.log('getting the page title.....' + title);
    return 'chrome';
});

console.log(flag);



//

//wait for 5 secs: 
setTimeout(() => {
    console.log('getting the data from sheet');
}, 5000);

setTimeout(()=>{
    debugger;
}, 4000);