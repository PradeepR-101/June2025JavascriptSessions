


let s = "hello world";
//output: Hello World

let words1 = s.split(" ");

//let pascalcaseWords = words.map((word)=> word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase());
let pascalcaseWords = words1.map((word)=> word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase());

let pascalcaseString = pascalcaseWords.join(" ");
console.log(pascalcaseString)

//or

let convertTpPascalCase = (str)=>{
  let words = str.split(" ");

//let pascalcaseWords = words.map((word)=> word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase());
let pascalcaseWords = words.map((word)=> word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase());

return pascalcaseWords.join(" ");
}

console.log(convertTpPascalCase(s))

//or

let words = s.split(" ");
let pascalCase = '';
for(let i=0; i<words.length; i++){
  let word = words[i];
  pascalCaseWord = word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase();
  //pascalCaseWord = word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase();
  pascalCase = pascalCase+ pascalCaseWord+ " ";
}

console.log(pascalCase)