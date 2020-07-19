// Створити 3 змінні
const banan = 15.678;
const apple = 123.965;
const pineApple = 90.2345;
const сash = 500;

//вивести макс та мін числа
const maxNum = Math.max(banan, apple, pineApple);
const minNum = Math.min(banan, apple, pineApple);

console.log(` max num :${maxNum}, minNum :${minNum}`);
//додати всі числа
const array = [banan, apple, pineApple];

const sum = array.reduce((accum, curr) => accum + curr);
console.log(`сумма всіх чисел ${sum}`);
// окгруглити до сотні
const roundNumberToBig = Math.ceil(sum / 100) * 100;
console.log(`окгрулення до сотні ${roundNumberToBig}`);
// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const isSumEven = Math.floor(sum) % 2 === 0;

console.log(` сумма э не парним числом :${isSumEven}`);
//6  Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const allPurchases = sum - сash;

console.log(`Вся сумма яка віднята від 500 грн = ${allPurchases}`);
// Виведіть середнє значення цін, округлене до другого знаку після коми 
console.log(`сумма яка округленна до 2 знаку після коми :${sum.toFixed(2)}`);

/* (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
(Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. Чистий прибуток = 130 - 26 -> 104) (Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90 меньше, собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40) 
*/
const minDiscount = 1;
const maxDiscount = 100;

const sumRound100 = Math.floor(Math.random() * (maxDis - minDis) + minDis);
const discount = Math.floor(Math.random() * (maxDis - minDis) + minDis);

const sumDiscount = Math.round((sRound100 - (sRound100 * (dis/100)))*100)/100;

const netProfit = Math.round(((sRound100/2) - (sRound100 * (dis/100)))*100)/100;

