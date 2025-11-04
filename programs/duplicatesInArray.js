

let arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];

//indexOf(ele) returns the first index of the element 
//arr.indexOf(ele)!==index
//1st occurrence index of 1 is 0 !== 0 false
//2nd occurrence index of 1 is 0!== 6 true
let duplicatess = arr.filter((ele,index,arr)=> arr.indexOf(ele)!==index)

console.log(duplicatess)

//or

let duplicates = [];
let uniqueElements = [];    

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];   

    if (uniqueElements.includes(element)) {
        if (!duplicates.includes(element)) {
            duplicates.push(element);
        }
    } else {
        uniqueElements.push(element);
    }
}
console.log('Duplicate elements in the array:', duplicates);
console.log('Unique elements in the array:', uniqueElements);

//or

const arr1 = [1, 2, 3, 4, 2, 3, 5];
const duplicates1 = arr1.filter((item, index) => arr1.indexOf(item) !== index);
const uniqueDuplicates = [...new Set(duplicates1)];
console.log(uniqueDuplicates); // Output: [2, 3]

//or

function findDuplicates(array) {
    const seen = new Set();
    const duplicates = new Set();   
    for (const item of array) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    return [...duplicates];
}
const uniqueDuplicates1 = findDuplicates(arr1);
console.log(uniqueDuplicates1); // Output: [2, 3]


//or

const array = [5, 6, 7, 5, 8, 9, 6];
const duplicateElements = [];
const elementCount = {};
for (const item of array) {
    elementCount[item] = (elementCount[item] || 0) + 1;
    if (elementCount[item] === 2) {
        duplicateElements.push(item);
    }
}
console.log(duplicateElements); // Output: [5, 6]

//or

const numbers = [10, 20, 10, 30, 40, 20, 50];   
const dupes = numbers.reduce((acc, num) => {
    if (acc.seen.has(num)) {
        acc.duplicates.add(num);
    }
    acc.seen.add(num);
    return acc;
}, { seen: new Set(), duplicates: new Set() });
console.log([...dupes.duplicates]); // Output: [10, 20]

//or

function getDuplicates(arr) {
    const map = new Map();
    const duplicates = [];
    for (const item of arr) {
        if (map.has(item)) {
            if (map.get(item) === 1) {
                duplicates.push(item);
            }
            map.set(item, map.get(item) + 1);
        }
        else {
            map.set(item, 1);
        }
    }
    return duplicates;
}
const duplicateItems = getDuplicates([1, 2, 3, 4, 3, 2, 5]);
console.log(duplicateItems); // Output: [2, 3]