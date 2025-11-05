
function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

//or

let isAnagram = (s1,s2)=>{
  let str1= s1.split('').sort().join('');
  let str2= s2.split('').sort().join('');
  console.log('str1 = '+str1) //eilnst
  console.log('str2 = '+str2) //eilnst
  return str1 ===str2;
}

console.log(isAnagram('listen','silent'));