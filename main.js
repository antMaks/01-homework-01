// 1 task
const Banan = 15.678;
const Apple = 123.965;
const PineApple = 90.2345;
// eslint-disable-next-line no-unused-vars
const Cash = 500;

//2 task
const maxNum = Math.max(Banan, Apple, PineApple);
const minNum = Math.min(Banan, Apple, PineApple);

console.log(maxNum, minNum);
// 3 task
const array = [Banan, Apple, PineApple];

const sum = [...array].reduce((accum, curr) => accum + curr);
console.log(sum);
// 4 task
let round = 70;
console.log(Math.ceil(sum) + round);
// 5 taks
const isSumEven = Math.floor(sum) % 2 === 0;

console.log(isSumEven);
//6 task
const allPurchases = sum - Cash;

console.log(allPurchases);

console.log(sum.toFixed(1));

//7 task

const minDis = 1;
const maxDis = 100;

const sRound100 = Math.floor(Math.random() * (maxDis - minDis) + minDis);
let dis = Math.floor(Math.random() * (maxDis - minDis) + minDis);

let sumDis = Math.round((sRound100 - (sRound100 * (dis/100)))*100)/100;

let netProfit = Math.round(((sRound100/2) - (sRound100 * (dis/100)))*100)/100;



