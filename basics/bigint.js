let num = 9007199254740991;
console.log(num + 222);

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

let number = 10n;
console.log(typeof (number));//bigint

let total = 9007199254740991n;//bigint
console.log(total + 222n);

//bigint + bigint

console.log(10n + 10n);

console.log(10n + 10n + 200n);

console.log(10n * 2n);

console.log(5n / 2n);

console.log(10n + 10n) + 20

let price = 10n;
let distance = 9007199254740991n;
console.log(distance*price);
