
let arr = [34, 15, 88, 2, 47, 6];

let getSecondLargestNumber = (arr)=>{
    let largestNumber = Math.max(...arr);
    let index = arr.indexOf(largestNumber);
    arr.splice(index,1);
    let secondLargestNumber = Math.max(...arr);
    return secondLargestNumber;
}

let secondLargestNum = getSecondLargestNumber(arr);
console.log('Second largest number in the array:', secondLargestNum);





//or

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
let secondLargest = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < Math.max(...arr)) {
        secondLargest = arr[i];
    }
}   
console.log('Second largest number in the array:', secondLargest);
//or

function findSecondLargest(array) {
    let max = -Infinity;
    let secondMax = -Infinity;  
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            secondMax = max;
            max = array[i];
        } else if (array[i] > secondMax && array[i] !== max) {
            secondMax = array[i];
        }
    }
    return secondMax;
}

const secondLargestNumber = findSecondLargest(arr);
console.log('Second largest number using function:', secondLargestNumber);  