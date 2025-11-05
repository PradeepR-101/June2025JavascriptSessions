

let arr = [1,2,4,6,7,8,10];

let totalSum = arr.reduce((pre,cur)=> pre+cur)

console.log(totalSum);

//or

function sumDigits(n) {
  return n.toString().split('').reduce((acc, d) => acc + +d, 0);
}
console.log(sumDigits(123)); // 6
