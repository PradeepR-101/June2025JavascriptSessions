let s = "my name is pradeep";

const words = s.split(" ");
const uniqueLengths = [...new Set(words.map(w => w.length))].sort((a, b) => b - a);
const secondLargestLength = uniqueLengths[1];
const result = words.find(w => w.length === secondLargestLength);

console.log(result); // "name"


// Step-by-step breakdown:

// Split the string into words → ["my", "name", "is", "pradeep"]
// Map each word to its length → [2, 4, 2, 7]
// Deduplicate lengths using Set → [2, 4, 7]
// Sort descending → [7, 4, 2]
// Pick index [1] → 4 (second largest length)
// Find the first word with that length → "name"

let s = "my name is pradeep";

let str = s.split(" ");

let wordsLength = str.map(w => w.length)
console.log(wordsLength)

let set = new Set(wordsLength);
console.log(set)

let uniqueEleLenght = [...set]
console.log(uniqueEleLenght)

let sortedEleLength = uniqueEleLenght.sort((a,b)=> b-a)
console.log(sortedEleLength);

console.log(sortedEleLength[1])
let secondLargestLength = sortedEleLength[1]

let secondLargestEle = str.find(w => w.length === secondLargestLength);
console.log(secondLargestEle)