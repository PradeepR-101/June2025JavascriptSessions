// Iteration

// forEach – loops over elements, returns nothing
// map – transforms each element, returns new array
// filter – keeps elements that pass a test
// reduce – accumulates elements into a single value
// find – returns first matching element
// findIndex – returns index of first match
// every – returns true if all elements pass
// some – returns true if any element passes
// flatMap – maps then flattens one level

// Mutation

// push / pop – add/remove from end
// unshift / shift – add/remove from start
// splice – insert, remove, or replace at any index
// sort – sorts in place
// reverse – reverses in place
// fill – fills elements with a static value
// copyWithin – copies part of array within itself

// Non-mutating / New Array

// slice – extracts a portion
// concat – merges arrays
// flat – flattens nested arrays
// Array.from – creates array from iterable
// Array.of – creates array from arguments

// Search & Info

// includes – checks if value exists
// indexOf / lastIndexOf – finds position of value
// at – accesses element by index (supports negatives)
// length – number of elements

// Conversion

// join – joins elements into a string
// toString – converts array to comma-separated string
// entries / keys / values – returns iterators

//=========================================================


// .forEach()
// Iteration
// Runs a function on each element. Returns nothing.

[1,2,3].forEach(x => console.log(x * 2))
// 2, 4, 6


// .map()
// Iteration
// Returns a new array by transforming each element.

[1,2,3].map(x => x ** 2)
// [1, 4, 9]


// .filter()
// Iteration
// Returns a new array of elements that pass the test.

[1,2,3,4,5].filter(x => x % 2 === 0)
// [2, 4]


// .reduce()
// Iteration
// Reduces all elements to a single accumulated value.

[1,2,3,4].reduce((acc, x) => acc + x, 0)
// 10


// .find()
// Iteration
// Returns the first element that passes the test.

[5,12,8,130].find(x => x > 10)
// 12
 

// .findIndex()
// Iteration
// Returns the index of the first matching element.

[5,12,8,130].findIndex(x => x > 10)
// 1


// .every()
// Iteration
// Returns true only if all elements pass the test.

[2,4,6].every(x => x % 2 === 0)
// true


// .some()
// Iteration
// Returns true if at least one element passes.

[1,3,5,6].some(x => x % 2 === 0)
// true
 

// .flatMap()
// Iteration
// Maps each element then flattens one level deep.

[1,2,3].flatMap(x => [x, x * 2])
// [1,2,2,4,3,6]
 

// .push()
// Mutation
// Adds one or more elements to the end.

const a = [1,2]; a.push(3);
a // [1, 2, 3]
 

// .pop()
// Mutation
// Removes and returns the last element.

const a = [1,2,3]; a.pop();
a // [1, 2]
 

// .shift()
// Mutation
// Removes and returns the first element.

const a = [1,2,3]; a.shift();
a // [2, 3]
 

// .unshift()
// Mutation
// Adds one or more elements to the beginning.

const a = [2,3]; a.unshift(1);
a // [1, 2, 3]
 

// .splice()
// Mutation
// Inserts, removes, or replaces elements at any index.

const a = [1,2,3,4]; a.splice(1,2,'x');
a // [1, 'x', 4]
 

// .sort()
// Mutation
// Sorts elements in place — use a comparator for numbers.

[3,1,4,1,5].sort((a,b) => a - b)
// [1, 1, 3, 4, 5]
 

// .reverse()
// Mutation
// Reverses the array in place.

[1,2,3].reverse()
// [3, 2, 1]
 

// .fill()
// Mutation
// Fills a range of elements with a static value.

[1,2,3,4].fill(0, 1, 3)
// [1, 0, 0, 4]
 

// .slice()
// New Array
// Returns a shallow copy of a portion. Original unchanged.

[1,2,3,4,5].slice(1, 4)
// [2, 3, 4]
 

// .concat()
// New Array
// Merges arrays and returns a new combined array.

[1,2].concat([3,4], [5])
// [1, 2, 3, 4, 5]
 

// .flat()
// New Array
// Flattens nested arrays to a given depth.

[1,[2,[3,[4]]]].flat(2)
// [1, 2, 3, [4]]
 

// .Array.from()
// New Array
// Creates an array from any iterable or array-like value.

Array.from('hello')
// ['h','e','l','l','o']
 

// .includes()
// Search
// Returns true if the value exists in the array.

[1,2,3].includes(2)
// true
 

// .indexOf()
// Search
// Returns the first index of a value, or -1 if absent.

['a','b','c','b'].indexOf('b')
// 1
 

// .at()
// Search
// Accesses element by index — negative counts from end.

[10,20,30,40].at(-1)
// 40
 

// .join()
// Conversion
// Joins all elements into a string with a separator.

['a','b','c'].join(' - ')
// 'a - b - c'
 

// .entries()
// Conversion
// Returns an iterator of [index, value] pairs.

// [...['a','b'].entries()]
// [[0,'a'],[1,'b']]
 

// .keys()
// Conversion
// Returns an iterator of the array's indices.

// [...'xyz'.split('').keys()]
// [0, 1, 2]