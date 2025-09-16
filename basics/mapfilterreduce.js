let score = [85, 92, 67, 78, 95, 43, 88, 76, 91, 82];

//get the passing score (score>=70), add 5 numbers as bonus, then calculate the average
//[85, 92, 67, 78, 95, 43, 88, 76, 91, 82]
//[85, 92, 78, 95, 88, 76, 91, 82]
//[90, 97, 83, 100, 93, 81, 96, 87]


let avg = score.filter(ele => ele >= 70)
    .map(ele => ele + 5)
    .reduce((sum, ele) => sum + ele, 0) / score.filter(ele => ele >= 70).length;

console.log(avg);
    
let prices = [25, 60, 15, 80, 35, 120, 45, 90];
//[25, 15, 35, 45]
//[]
//get the lower price(price<50), apply 10% discount, calculate total
let finalBilling = prices.filter(ele => ele < 50)
    .map(ele => ele * 0.9)
    .reduce((total, ele) => total + ele, 0);

console.log(finalBilling);

let dict = ['WDIO', 'git', 'playwright', 'selenium', 'cypress'];
//get the long words (length>4) ---> convert to upper case --> join with -




