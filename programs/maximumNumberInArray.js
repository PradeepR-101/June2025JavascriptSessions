
let arr = [1,9,5,7,2,10];

let maximumNumberr = (arr)=>{
  return arr.reduce(function(pre,cur){
    console.log('previous value '+pre);
    console.log('current value '+cur)
    return pre>cur?pre:cur;
  })
}
console.log('maximum number '+maximumNumberr(arr))

//or

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log('Maximum number in the array:', max);

//or

let maxNum = Math.max(...arr);
console.log('Maximum number using Math.max():', maxNum);

//or

function findMaxNumber(array) {
    return array.reduce((max, current) => (current > max ? current : max), array[0]);
}   
let maximum = findMaxNumber(arr);
console.log('Maximum number using reduce():', maximum);

//or

const maxNumber = arr.reduce((a, b) => Math.max(a, b), arr[0]);
console.log('Maximum number using reduce() and Math.max():', maxNumber);


//or

const maxVal = arr.sort((a, b) => b - a)[0];
console.log('Maximum number using sort():', maxVal);

//or

function getMaxNumber(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
const maximumNumber = getMaxNumber(arr);
console.log('Maximum number using custom function:', maximumNumber);

