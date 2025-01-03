// console.log('Hello! :>> ');

//% Імперативний підхід

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

// console.log(filteredNumbers); // [4, 5]

// Декларативний підхід
const numbersD = [1, 2, 3, 4, 5];
const filteredNumbersD = numbers.filter((value) => value > 3);
// console.log(filteredNumbers); // [4, 5]

() => {}; // анонімна стрілочна функція

// (value, wer)=>{
//  return   value > 3
// }

// value => value > 3

//@ ======================== Функція з побічними ефектами ==========================================

// const numbersF = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbersF.length; i += 1) {
//     const el = numbersF[i]
//     // console.log('el :>> ', el);
//     // console.log('i :>> ', i);

//   if (el > 3) {
//     numbersF.push(el);
//   }
// }

// // console.log(numbersF); // нескінченний цикл

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};
const numbersA = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// Відбулася мутація вихідних Даних
// console.log(numbers); // [2, 4, 6, 8, 10]

//@ ======================== Чисті функції ==========================================

// const pureMultiply = (array, value) => {
//     const result = [];

//     for (let i = 0; i < array.length; i += 1) {
//       result.push(array[i] * value);
//     }

//     return result;
//   };

//   const numbersB = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// Не сталося мутації вихідних даних
// console.log(numbers); // [1, 2, 3, 4, 5]

// Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ==========================================================
const array = [11, 24, 37, 48, 58];
let newArray = [];

for (let i = 0; i < array.length; i += 1) {
  const element = array[i];
  const resultPow = Math.pow(element, 2);
  // console.log("result :>> ", resultPow);
  newArray.push(resultPow);
}
// console.log("newArray :>> ", newArray);

// =======================================================

const pureMultiply = (array, value) => {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * value);
  }

  return result;
};

const numbersB = [1, 2, 3, 4, 5];

// const doubledNumbers = pureMultiply(numbersB, 2);
// console.log("doubledNumbers :>> ", doubledNumbers);

//%  ============================= Метод map() ==============================
//$ Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.

//$  - Поелементо перебирає оригінальний масив.
//$  - Не змінює оригінальний масив.
//$  - Результат роботи колбек-функції записується у новий масив.
//$  - Повертає новий масив однакової довжини.

// массив.map((element, index, array) => {
//   // Тіло колбек-функції
// });

const arrNumbers = [1, 2, 3, 4, 5];

// const newArrayPow = arrNumbers.map((element, index, array) => {
//   return  Math.pow(element, 2);
// });
const newArrayPow = arrNumbers.map((element) => Math.pow(element, 2));

// console.log("arrNumbers :>> ", arrNumbers);
// console.log("newArrayPow :>> ", newArrayPow);

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const newStudents = students.map((student) => {
  //  const {name} = student;
  // console.log('student :>> ', student);
  return student.name;
});

// console.log("newStudents :>> ", newStudents);

//%  ============================= Метод filter() ==============================

//$ Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

// масив.filter((element, index, array) => {
//   // Тіло колбек-функції
// });

//$  - Не змінює оригінальний масив.
//$  - Поелементо перебирає оригінальний масив.
//$  - Повертає новий масив.
//$  - Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
//$  - Якщо колбек повернув true, елемент додається у масив, що повертається.
//$  - Якщо колбек повернув false, елемент не додається у масив, що повертається.
//$  - Якщо жоден елемент не задовольнив умову, повертає порожній масив.

const values = [51, -3, 27, 21, -68, 42, -37];
console.log('values :>> ', values);

const positiveNum = values.filter((num) => num > 0);
console.log('positiveNum :>> ', positiveNum);

const negativeNum = values.filter((num) => num <= 0);
console.log('negativeNum :>> ', negativeNum);

const bigNum = values.filter((num) => num > 100);
console.log('bigNum :>> ', bigNum);


//%  ============================= Метод find() ==============================
//$ Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

// масив.find((element, index, array) => {
//   // Тіло колбек-функції
// });

//$  - Не змінює оригінальний масив.
//$  - Поелементо перебирає оригінальний масив.
//$  - Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
//$  - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" }, - 
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorBlue = colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
console.log('colorBlue :>> ', colorBlue);
colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find(option => option.label === "white"); // undefined

//%  ============================= Методи every() і some() ==============================

//^ Метод every()
//$ Перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

// масив.every((element, index, array) => {
//   // Тіло колбек-функції
// });

//$  - Не змінює оригінальний масив.
//$  - Поелементо перебирає оригінальний масив.
//$  - Повертає true, якщо всі елементи масиву задовольняють умову.
//$  - Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
//$  - Перебирання масиву припиняється, якщо колбек повертає false.

// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every(value => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

//^Метод some()
//$Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

// масив.some((element, index, array) => {
//   // Тіло колбек-функції
// });

//$  - Не змінює оригінальний масив.
//$  - Поелементо перебирає оригінальний масив.
//$  - Повертає true, якщо хоча б один елемент масиву задовольняє умову.
//$  - Повертає false, якщо жоден елемент масиву не задовольняє умову.
//$  - Перебирання масиву припиняється, якщо колбек повертає true.
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

//$Масив об'єктів
//$ Під час роботи з масивом об'єктів перевіряється значення певної їх властивості. Наприклад, у нас масив об'єктів фруктів, необхідно дізнатися, чи є фрукти в наявності та чи є в наявності хоча б якісь фрукти, тобто більше 0 штук.

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every поверне true тільки, якщо усіх фруктів буде більше 0 штук
const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// some поверне true, якщо хоча б одного фрукту буде більше 0 штук
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true





























// ================================================================================

// ================================================================
// Використовуючи  масив об’єктів players виконай наступні завдання
// Отримати масив імен всіх гравців
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// Збільшити кількість годин гравця по id. Переписати на тернарник
// Отримати масив всіх гравців онлайн
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
// Знайти гравця по id
// Знайти гравця по імені
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//^ Отримати масив імен всіх гравців
const arrayNames = players.map((player)=>player.name)
console.log('arrayNames :>> ', arrayNames);

//^ Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
const addPoints = players.map((player)=>{
  return {...player, points:Math.floor(player.points*1.1)}
})
console.log('addPoints :>> ', addPoints);

//^ Збільшити кількість годин гравця по id. Переписати на тернарник
const playerIdUpdate = 'player-4';
const addPlayerHours = 30;

const addingPlayerHoursForId = players.map((player)=> player.id === playerIdUpdate ? {...player, timePlayed: player.timePlayed + addPlayerHours} : player)
console.log('addingPlayerHoursForId :>> ', addingPlayerHoursForId);

//^ Отримати масив всіх гравців онлайн
const playerOnline = players.filter((player)=>player.online === true)
console.log('playerOnline :>> ', playerOnline);

//^ Отримати масив всіх гравців офлайн
const playerOffline = players.filter((player)=>player.online === false)
console.log('playerOffline :>> ', playerOffline);

//^ Отримати масив всіх хардкорних гравців з часом більше 250
const playerHard = players.filter((player)=>player.timePlayed === 250)
console.log('playerHard :>> ', playerHard);


//^ Знайти гравця по id
const findPlayerForId =  players.find((player)=>player.id ===  'player-3')
console.log('findPlayerForId :>> ', findPlayerForId);

//^ Знайти гравця по імені
const findPlayerForName =  players.find((player)=>player.name ===  'Chelsy')
console.log('findPlayerForName :>> ', findPlayerForName);

//^ Перевірити чи всі гравці мають час більше 200
const allPlayersHardTime = players.every((player)=>player.timePlayed > 200)
console.log('allPlayersHardTime :>> ', allPlayersHardTime);

//^ Перевірити чи всі гравці онлайн
const allPlayersOline = players.every((player)=>player.online ===true)
console.log('allPlayersHardTime :>> ', allPlayersHardTime);