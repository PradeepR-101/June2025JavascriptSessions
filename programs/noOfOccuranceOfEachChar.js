

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
