

let arr1 = [1,3,7]
let arr2 = [2,4,6]

//let mergedArray = arr1.concat(arr2);
let mergedArray = [...arr1,...arr2]
console.log(mergedArray);

//arrrow function as callback to sort ie sorting algorithm
//let sortedArray = mergedArray.sort((a,b)=> a-b)
//annonymous function as callback to sort
let sortedArray = mergedArray.sort(function(a,b){
    //ascending order
  return a-b;
    //descending order
    //return b-a;
})

console.log(sortedArray);