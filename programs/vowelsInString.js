


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
console.log(vowelsString(s).length)

//or

let str = s.split('');

let vowelEle = str.filter((ele) => ['a','e','i','o','u'].includes(ele))

console.log(vowelEle)
