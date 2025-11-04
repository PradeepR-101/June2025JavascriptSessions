


//fibonacci series
//0 1 1 2 3 5 8 13
//first two num a=0, b=13
//sum = a+b = 0+1 = 1
//sum = a+b = 1+1 = 2
//sum = a+b = 1+2 = 3

let a=0;
let b=1;

for(let i=0; i<10; i++){
  let sum = a+b;
  a=b;
  b=sum;
  console.log(sum)
}
