

let s = "pradeep";

let set = new Set();
for(let i=0; i<s.length; i++){
  set.add(s[i]);
}

let uniqueArrayElements = [...set];

for(let uniqueEle of uniqueArrayElements){
  let count = 0;
  for(let i=0; i<s.length; i++){
    if(uniqueEle === s[i]){
      count++;
    }
  }
  console.log(`${uniqueEle} = ${count}`)
}


//or




//typescript with function
 
// let s = "malayalam";

// let noOfOccuranceOfChar = (str:string) => {

// let map = new Map<string|unknown,number|null>();
// let set = new Set();
// for(let i=0; i<s.length; i++){
//     set.add(s[i]);
// }

// let uniquechars = [...set]

// for(let uniqueChar of uniquechars){
//     let count =0;
//     for(let i=0; i<s.length; i++){
//         if(uniqueChar===s[i]){
//             count++;
//         }
//     }
//     console.log(uniqueChar+" = "+count);
//     map.set(uniqueChar,count);
// }
// return map;

// }

// console.log(noOfOccuranceOfChar(s))