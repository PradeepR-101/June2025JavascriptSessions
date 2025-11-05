
function isArmstrong(n) {
  let digits = n.toString().split('');
  let sum = digits.reduce((acc, d) => acc + Math.pow(+d, digits.length), 0);
  return sum === n;
}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123)); // false