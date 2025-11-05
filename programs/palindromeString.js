


let s = "madam";

let isPalindromeString = (str)=>{
  let reverseString = str.split("").reverse().join("");
  if(reverseString===str){
    return true;
  }
  else{
    return false;
  }
}

console.log(isPalindromeString(s))

//or

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // true

