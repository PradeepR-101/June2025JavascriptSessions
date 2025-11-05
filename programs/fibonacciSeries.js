


//fibonacci series
//0 1 1 2 3 5 8 13
//first two num a=0, b=1
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

//or

function fibonacci(n) {
  let a = 0, b = 1, result = [a, b];
  for (let i = 2; i < n; i++) {
    [a, b] = [b, a + b];
    result.push(b);
  }
  return result;
}
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]