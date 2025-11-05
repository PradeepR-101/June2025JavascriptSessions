
function firstUniqueChar(str) {
  for (let char of str) {
    // console.log(char)
    // console.log("index "+str.indexOf(char));
    // console.log("last index "+str.lastIndexOf(char));
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null;
}
console.log(firstUniqueChar("aabbcde")); // "c"
console.log(firstUniqueChar("aabbcc")); // null