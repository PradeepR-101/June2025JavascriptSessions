

let arr = [1,2,4,6,7,8,10];

//factorial of num
//5!=1*2*3*4*5=120

const factorailOfNum = (num)=>{
  if(num<0){
    return new Error('factorail not possible with negative numbers')
  }
  else{
    let fact = 1;
    for(let i=1; i<=num; i++){
      fact = fact * i;
    }
    return fact;
  }
}
console.log(factorailOfNum(5))