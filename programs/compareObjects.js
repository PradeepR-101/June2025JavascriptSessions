

function objectsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Alice", age: 25 };
const obj3 = { name: "Bob", age: 30 };

console.log(objectsEqual(obj1, obj2)); // true
console.log(objectsEqual(obj1, obj3)); // false