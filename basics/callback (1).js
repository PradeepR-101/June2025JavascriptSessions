function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => {
  console.log("Now do something with the data");
});



function getData(filename, callback) {
    console.log('file name is : ' + filename);
    setTimeout(() => {
        console.log('download is completed: ' + filename);
        callback(filename);
    }, 5000);
    
};

getData('resume.pdf', (file) => {
    console.log('open the file: '+ file);
});

function getInfo(callback) {
    setTimeout(() => {
        console.log('doing something.....');
        callback(10);
    }, 4000);    
}

getInfo(function (x) {
    console.log(x);
})


//design a function: never create any arrow/anonymous function body while desiging the function
function doSomething(funcName, url) {
    console.log('entering the url...' + url);
    funcName(url);
}



//caller: call this function now:
//call by passing callback function body and url value
doSomething((data) => {
    console.log('hello appp:'+ data);
    },'http://www.google.com'
); 


