


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

