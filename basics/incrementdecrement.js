//1. post increment : ++
let a = 1;
let b = a++;
console.log(a);//2
console.log(b);//1

let m = -99;
let n = m++;
console.log(m);
console.log(n);

//2. pre increment: ++
let c = 1;
let d = ++c;
console.log(c);
console.log(d);

let x = -999;
let y = ++x;
console.log(x);
console.log(y);

//3. post decrement: --
let p = 2;
let q = p--;
console.log(p);
console.log(q);

let k = -89;
let h = k--;
console.log(k);
console.log(h);

//4. pre decrement: --
let v = 2;
let z = --v;
console.log(v);
console.log(z);

let total = 100;
console.log(total++);//100
console.log(total);//101

let num = 1000;
console.log(++num);
console.log(num);

let st = '5';//5
console.log(++st);

let tr = '5';
console.log(tr--);


console.log('===============');

let i = 11;
let j = i++ + ++i;
    // 
console.log(i);//13
console.log(j);//24

console.log('===============');

let a1 = 11;
let b1 = 22;
let c1 = a1 + b1 + a1++ + b1++ + ++a1 + ++b1;
		
console.log(a1);//13
console.log(b1);//24
console.log(c1);//103

console.log('===============');
let s=0;
let w = s++ - --s + ++s - s--;

console.log(s);
console.log(w);

console.log('===============');

let m1 = 0;
let n1 = 0;
let p1 = --m1 * --n1 * n1-- * m1--;

console.log(m1);
console.log(n1);
console.log(p1);

console.log('===============');

let d1 = 1.5;
let D1 = 2.5;

let res = d1++ + ++D1;
console.log(res);//5
console.log(d1);//2.5
console.log(D1);//3.5



