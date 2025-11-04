let arr1 = [4,4,2,3,1,7,8]
let arr2 = [4,2,3,7]

 let intersection = arr1.filter(ele=>{
   return arr2.includes(ele)
 })

 //note: converting array to set
 
 //console.log([...new Set(intersection)])
 
let set = new Set(intersection);
console.log([...set])