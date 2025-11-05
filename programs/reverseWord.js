

let reverseWord = (str)=>{
  let charArray = str.split(" ");
  let reverseArray = charArray.reverse();
  return reverseArray.join(" ");
  //return str.split(" ").reverse().join(" ");
}

let s = "hey this is javascript";
console.log(reverseWord(s))

//or

let reverseWord1 = (str)=>{
    let wordArray = str.split(" ");
    let rev = "";
    for(let i=0; i<wordArray.length; i++){
      rev = wordArray[i] + " " + rev
   }
   return rev.trim();
}

console.log(reverseWord1(s))