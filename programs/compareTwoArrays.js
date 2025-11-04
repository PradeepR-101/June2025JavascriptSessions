

let arr1 = [4,2,3]
let arr2 = [4,2,3]

function compareTwoArrays(arr1,arr2){
  //if sorted arry
  //return arr1.length === arr2.length && arr1.every((ele,index)=> ele ===arr2[index])
  //if unsorted arry then sort it first then compare
  return arr1.length === arr2.length && arr1.sort().every((val, index) => val === arr2.sort()[index])
  
}

console.log(compareTwoArrays(arr1,arr2));