const msg = "Hello my friend";

//% split

// console.log(msg.split(' '));

//% join

const arr = ["Ivan", "Ira", "Igor"];

// console.log(arr.join('-'));

// Методи indexOf() і includes()

// console.log(arr.indexOf('Igor'));

// console.log(arr.includes('Ivans'));

//% Перевірка множинних умов з includes()

const fruit = "qwerty";

// if(fruit === "sdfgh" || fruit === "sdfdfhgh" || fruit === "qwerty" ){
//     console.log("Такий фрукт є!");
//   }

const fruits = ["apple", "strawberry", "cherry", "cranberries"];

// console.log(fruits.includes('cherry'));

// if(fruits.includes('cherry')){
//     console.log("Такий фрукт є!");
// }

//% Методи push(), pop(), shift(), unshift()

// fruits.push("mango")
// console.log(fruits);

// fruits.pop("mango")

// console.log(fruits);

// ========================== Метод  slice() =========================
// slice(begin, end)
// Копіює елементи від begin, до, але не ключа, end.

// const newArr = fruits.slice(1, 3)
// const newArr = fruits.slice(0)
// const newArr = fruits.slice(1, fruits.length - 1 )

// console.log(newArr);

// ========================== Метод  splice() =========================

// splice(position, num)

const scores = [1, 2, 3, 4, 5];

const arrOld = [6, 7, 8, 9, 10, 11, 12];

const deleteElement = scores.splice(2, 3);  // видалення 3-ох елементів починаючи з 2індекса

 scores.splice(1, 0, 10, 11, 12 ) // Добавлення елементів в масив

scores.splice(2, 3, 10, 11, 12);  // Заміна елементів у будь яку частину масиву

// console.log(scores);
console.log(scores);

// ========================== Метод  concat() =========================

// scores.concat(arrOld);
// 

const arrBoth = scores.concat(arrOld);

console.log(arrBoth);
