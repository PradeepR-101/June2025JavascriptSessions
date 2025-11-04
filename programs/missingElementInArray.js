let arr = [1,2,4,6,7,8,10];

const missingNumbers = (arr)=>{
  let missingArr = [];
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);
  for(let i=minNum; i<maxNum; i++){
    //if value is not present in the array then it will return -1 as the index
    if(arr.indexOf(i)<0){
      missingArr.push(i) 
    }
  }
  return missingArr;
}

console.log(missingNumbers(arr))