
let arr = [10,30,20,7,15];

for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    //ascending > and descending <
    if(arr[i]>arr[j]){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
//console.log(arr) //sorted array
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}

console.log("minimum num "+arr[0])
console.log("maximum num "+arr[arr.length-1])
console.log("second minimum num "+arr[1])
console.log("second maximum num "+arr[arr.length-2])