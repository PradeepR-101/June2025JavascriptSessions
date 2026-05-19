
let arr = [34, 15, 88, 2, 47, 6];

let minimumNumberr = (arr)=>{
  return arr.reduce(function(pre,cur){
    console.log('previous value '+pre);
    console.log('current value '+cur)
    return pre>cur?pre:cur;
  })
}
console.log('minimum number '+minimumNumberr(arr))

//or

//typescript with function
// let arr = [1,2,4,6,7,8,10];

// let minNum = (arr:number[]) => {
//     return arr.reduce((pre,cur) => pre<cur?pre:cur)
// }

// console.log(minNum(arr))

//or

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log('Minimum number in the array:', min);

//or

let minNum = Math.min(...arr);
console.log('Minimum number using Math.min():', minNum);

//or

function findMinNumber(array) {
    return array.reduce((min, current) => (current < min ? current : min), array[0]);
}

let minimum = findMinNumber(arr);
console.log('Minimum number using reduce():', minimum);

//or

const minNumber = arr.reduce((a, b) => Math.min(a, b), arr[0]);
console.log('Minimum number using reduce() and Math.min():', minNumber);

//or
const minVal = arr.sort((a, b) => a - b)[0];
console.log('Minimum number using sort():', minVal);

//or
function getMinNumber(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}       
const minimumNumber = getMinNumber(arr);
console.log('Minimum number using custom function:', minimumNumber);

//or

const array = [12, 5, 8, 3, 20, 7];
let minimumValue = array[0];    
for (let i = 1; i < array.length; i++) {
    if (array[i] < minimumValue) {
        minimumValue = array[i];
    }   
}
console.log('Minimum number using loop:', minimumValue);    
