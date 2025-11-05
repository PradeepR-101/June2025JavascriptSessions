

let arr = [1, [2, [3, 4]]];

let flattenArray = (arr)=>{
  return arr.flat(Infinity);
} 

console.log(flattenArray(arr)) //[ 1, 2, 3, 4 ]
