

let tableOfAnyNum = (num)=>{
  for(let i=1; i<=10; i++){
    let res = num * i;
    console.log(`${num} * ${i} = ${res}`)
  }
}

console.log(tableOfAnyNum(2))