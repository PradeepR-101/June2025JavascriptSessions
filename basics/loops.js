// 1 to 100

//1. while
//2. for
//3. do-while

//4. for...in
//5. for ..of
//6. forEach

//1. while :
//1 to 10:
let i = 1;//start -- initlization
while (i <= 10) {//conditional
    console.log(i);//12345678910 -- statement
    i++;//11 //increment
    // ++i;
    //i = i + 1;//11
}

console.log('===========');
//break:
let j = 1;
while (j <= 10) {
    console.log(j);//12345
    if (j === 5) {
        console.log('bye');
        break;
    }
    j++;//5
}

console.log('===========');

//
while (true) {
    console.log('welcome to Naveen Automation Labs');
    break;
}

//
while (1) {
    console.log('welcome to Naveen Automation Labs');
    break;
}

//
let k = 1;
while (true) {
    console.log('welcome to hotel taj');
    if (k === 5) {
        console.log('bye!!');
        break;
    }
    k++;//5
}

console.log('===========');
//for loop:
//1 to 10:

for (let m = 1; m <= 10; m++){
    console.log(m);//12345678910
}

console.log('===========');
let n = 1;
for (; n <= 10 ;){
    console.log(n);//1234...910
    n++;//11
}

console.log('===========');
for (; ;){
    console.log('byEE!!!!');
    break;
}

console.log('===========');
//10 to 1:
for (let s = 10; s >= 1; s--){
    console.log(s);
}

console.log('===========');
//print all the even numbers bw 1 to 10:
for (let num = 1; num <= 10; num++){
    if (num % 2 === 0) {
        console.log(num);
    }
}

//print all the odd numbers bw 1 to 10:
for (let num = 1; num <= 10; num++){
    if (num % 2 === 1) {
        console.log(num);
    }
}

//use cases for while loop: if number of iterations are not fixed
//1. wait for the webelement: 0 5 10 20 25
//2. wait for page loading/dynamic loader: 5 10 15 20
//3. webtable pagination: 
//4. Infinite page scrolling: 
//5. total number of links/elements: 30, 40, 100
//6. calendar handling: 
//7. carousel handling: 
//8. get the data from DB-table: 
//9. progress bar: 0 to 100%: time taken
//10. File downloading/uploading: time taken to download it
//11. wait for the dynamic alert/popup/adv
//12. EOF: end of file: 1 to n


//use cases for for loop: if number of iterations are fixed
//1. drop down with fixed value: month, day, year, country
//2. excel/csv: 10 rows: 1 to 10
//3. Array/list: 5: 0 to 4
//4. flight/movie/bus booking: seats: 120 : 0 to 119
//5. Menu Items/Category: 
//6. footer links: 
//7. wrong login attempts: max 3 times
//8. retry logiv: run the failure test cases: 1 2 3 : Failed


console.log("==========");
//3. do-while:
//1 to 10:
let p = 1;
do {
    console.log(p);
    p++;
}
while (p <= 10);

console.log("==========");

//let isElementDisplayed = false;
do {
    console.log('check the element');
}
while (false);
console.log("==========");

let d = 1;
do {
    console.log(d);//1
    d++;//2
}
while (d >= 10);//2>=10: false


//use cases for do-while loop:
//land on the page
//check the element in the beginning itself - at least once
//if the element not present: then you start the loop
//if the element is presnet : click and break the loop

