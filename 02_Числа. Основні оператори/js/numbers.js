// const b = 10;
// const a = b + 10;
// const myNumber = a;
// console.log(myNumber);
// console.log(a);

// =========================  оператори ==============================
// Математичні оператори ( + - * / % += -=)

const num1 = 15;
const num = 15;

// alert(num + num1);
// console.log("додавання", num + num1);
// console.log("віднімання", num - num1);
// console.log("множення", num * num1);
// console.log("ділення", num / num1);
// console.log("залишок від ділення", num % num1);

// let value = 6;
// value = value + 15;
// console.log(value);
// value += 15;
// console.log(value);
// value -= 15;
// console.log(value);

// =========================  оператори порівняння (true or false)==============================
// < > == === >= <=
//a > b і a < b - більше / менше
// a >= b і a <= b - більше / менше або дорівнює
// a == b - рівність
// a != b - нерівність
// a === b - сувора рівність
// a !== b - сувора нерівність

// const isTrue = num > num1;
// console.log(typeof isTrue);
// console.log(num);
// console.log(num > num1);
// console.log(num < num1);
// console.log(num <= num1);
// console.log(num >= num1);
// console.log(num === num1);
// console.log(num == num1);
//* =======Оператори порівняння====
// const a = 5;
// const b = 7;
// const c = 6;

// const string = 'qwerty';

// console.log('typeof str:>>', typeof string);

// console.log('a>b', a > b);
// console.log('a<b', a < b);
// console.log('a <= c', a <= c);
// console.log('a >= c', a >= c);
// console.log('a >= c', a >= c);

//* Cувора рівність та рівність по типам

// console.log('a == c:', a == c);
// console.log('a != b:', a !== b);

// console.log('a === c:', a === c);
// console.log('a !== c:', a !== c);

// console.log(5 === '5');
// console.log(5 == '5');

// ✅ Добре, приведення типів не виконується
// console.log(5 === "5"); // false
// console.log("Vasyl" === "VaSyl"); // false         не true, !false анолог
//                                   //        не false, !true  анологічно

// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

// ===================== Number  ======================

// // const data = prompt("Введи число");
// const data = 150;
// console.log("message" + " " + "name");
// // console.log(data + 10);
// // console.log(Number(data) + 10);
// // console.log(150);

// const valueA = "5";
// // console.log(Number(valueA)); // 5
// // console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// // const valueB = "20";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

//* числа

// const value = "6";
// const str = "Hello!";
// console.log('Number:>>', typeof Number(value));
// console.log('Number:>>', value);
// console.log('Number:>>', Number(str));

// const valueA = "5";
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// const valueB = "random string";
// console.log(Number(valueB));
// console.log(typeof Number(valueB));

// const num1 = "5px";
// const num2 = 10;

// console.log(num1 === num2);
// console.log(num1 !== num2);

// console.log('typeof:>>', typeof num1);

// console.log(':>>', Number(num1));

//* ============ Number.parseInt()  та   Namber.parseFloat ================

// console.log(Number.parseInt(num1));
// console.log(Number.parseInt("7.6px"));
// console.log(Number.parseInt("r7px"));
// console.log(Number.parseInt("8787px"));
// console.log(Number.parseInt("7px777"));
// console.log(Number.parseInt("qwerty"));

// console.log(Number.parseInt(5.1537752e47));


// console.log(Number.parseFloat('5px'))
// console.log(Number.parseFloat('7.6px'));
// console.log(Number.parseFloat('8787.589px'));
// console.log(Number.parseFloat('qwert5.45px'));
// console.log(Number.parseFloat('qwerty'));

//*===================== Перевірка на число Number.isNaN(val) =======================

// const validNumber = Number('51');

// console.log(!Number.isNaN(validNumber)); // true

// const invalidNumber = Number('qweqwe');
// console.log(Number.isNaN(invalidNumber)); //true

//* ========================== Додавання чисел з рухомою крапкою (комою) ============

// console.log( 0.1 + 0.2); // 0.3000000000000004

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004


// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(4)); // 0.4100


//* ================== Клас Math ======================
//  // Math.floor(num) - повертає найменше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найбільше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
console.log((Math.random() * (10 - 1) + 1*100)); // псевдовипадкове число від 1 до 10