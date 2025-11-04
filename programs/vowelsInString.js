


let s = "pradeep";

let vowels = ['a','e','i','o','u'];

let vowelsString = (str)=>{
let expectedArray = [];
  for(let s of str){
    if(vowels.includes(s)){
      expectedArray.push(s)
    }
  }
  return expectedArray;
}

console.log(vowelsString(s))

