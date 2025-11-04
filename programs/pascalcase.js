

let s = "hey this is pascal case string";
//output = Hey This Is Pascal Case String

let pascalCaseString = (str)=>{
  let words = str.split(" ");
  let newWords = words.map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  })
  return newWords.join(" ");
}

console.log(pascalCaseString(s))
