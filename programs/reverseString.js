

let s = "pradeep";

let reverseString = (str)=>{
  let strToArr = str.split("");
  let reverseArr = strToArr.reverse();
  let strReverse = reverseArr.join("");
  return strReverse;
}

console.log(reverseString(s))

//or

let reverseString1 = (str)=>{
  let rev = "";
   for(let i=0; i<str.length; i++){
     rev = str[i] + rev;
   }
   return rev;
}

console.log(reverseString1(s))