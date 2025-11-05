

let arr = [1,2,4,6,7,8,10];

arr.forEach

//prime Number
//number divisible by itself or 1
//modulus should be zero

const isPrimeNumber = (num)=>{
  if(num===1){
    console.log(`${num} is not prime num neither composite`);
  }
  else if(num<1){
    console.log(`${num} prime number not possible with zero and negative numbers`)
  }
  else{
    for(let i=2; i<num; i++){
      if(num%i===0){
        return false;
      }
      else{
        return true;
      }
    }
  }
}

console.log(isPrimeNumber(8))

//or

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true
