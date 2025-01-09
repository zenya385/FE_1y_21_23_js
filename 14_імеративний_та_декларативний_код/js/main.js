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
// console.log('values :>> ', values);

const positiveNum = values.filter((num) => num > 0);
// console.log('positiveNum :>> ', positiveNum);

const negativeNum = values.filter((num) => num <= 0);
// console.log('negativeNum :>> ', negativeNum);

const bigNum = values.filter((num) => num > 100);
// console.log('bigNum :>> ', bigNum);

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
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorBlue = colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// console.log('colorBlue :>> ', colorBlue);
colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find((option) => option.label === "white"); // undefined

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
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

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
[1, 2, 3, 4, 5].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some((value) => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

//$Масив об'єктів
//$ Під час роботи з масивом об'єктів перевіряється значення певної їх властивості. Наприклад, у нас масив об'єктів фруктів, необхідно дізнатися, чи є фрукти в наявності та чи є в наявності хоча б якісь фрукти, тобто більше 0 штук.

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every поверне true тільки, якщо усіх фруктів буде більше 0 штук
const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false

// some поверне true, якщо хоча б одного фрукту буде більше 0 штук
const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

//%  ============================= Метод reduce() ==============================

//$ Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.

// масив.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

// previousValue - проміжний результат (акумулятор)
// currentItem - поточний елемент масиву
// index - індекс поточного елемента масиву

// let total = 0
// for (let i = 0; i < 10; i += 1) {
//   total += i
//   total = total + i
//   console.log(`${i+1}. previousValue ${total}`);
// }
// console.log(total);

// // 0+1+2+3+4+5+6+7+8+9 = total

// const arr = [2, 7, 3, 14, 6]
// const total = arr.reduce((previousValue, number) => {
//   return previousValue + number;

// }, 0);

const total = [2, 7, 3, 14, 6].reduce(
  (previousValue, number) => previousValue + number,
  0
);

console.log(total); // 32

// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32

// ========================================================================
// Визначити середні бал студентів

const studentsR = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = studentsR.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

//%  ============================= Метод sort() ==============================
//$ Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

//$ Сортує і змінює вихідний масив.
//$ Повертає змінений масив, тобто посилання на відсортований вихідний.
//$ За замовчуванням сортує за зростанням.
//$ Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.


// правилне сортування чисел
const scores = [61, 19, 2, 3, 7, 74, 35, 92, 56];

const ascendingScores = [...scores].sort((a, b) => b - a);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]



const students1 = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

["математика", "фізика", "інформатика", "математика","фізика", "біологія", "література", "інформатика"]


const uniqueSortedCourses = students1.flatMap(student => student.courses).filter((course, index, array)=> array.indexOf(course) === index)

console.log('uniqueSortedCourses :>> ', uniqueSortedCourses);

// // ================================================================================

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

//^ Завдання 1
// Отримати масив імен всіх користувачів (поле name).

const getUserNames = (users) => {
  // твій код
  const usersNames = users.map((el) => {
    return el.name;
  });
  return usersNames;
};

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//^ Завдання 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

//!   function getUsersWithAge(params){}       // function declaration (оголошення функції)

//!   const  getUsersWithAge =  function(params){}       // function expretion (функціональний вираз)

//!   const getUsersWithAge = (params) => {}     // стрілочна

//!   (params)=>   // анонімна стрілочна функція

// getUsersWithAge()

const getUsersWithAge = (users, min, max) => {
  // твій код

  const usersNameAgeCategory = users.filter(({ name, age }) => {
    //  const {id,
    //     name,
    //     email,
    //     eyeColor,
    //     friends,
    //     isActive,
    //     balance,
    //     skills,
    //     gender,
    //     age} = user;
    if (age > min && age < max) {
      return name;
    }
  });
  return usersNameAgeCategory;
};

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// // ================================================================
// // Використовуючи  масив об’єктів players виконай наступні завдання
// // Отримати масив імен всіх гравців
// // Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// // Збільшити кількість годин гравця по id. Переписати на тернарник
// // Отримати масив всіх гравців онлайн
// // Отримати масив всіх гравців офлайн
// // Отримати масив всіх хардкорних гравців з часом більше 250
// // Знайти гравця по id
// // Знайти гравця по імені
// // Перевірити чи всі гравці мають час більше 200
// // Перевірити чи всі гравці онлайн

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// //^ Отримати масив імен всіх гравців
// const arrayNames = players.map((player)=>player.name)
// console.log('arrayNames :>> ', arrayNames);

// //^ Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
// const addPoints = players.map((player)=>{
//   return {...player, points:Math.floor(player.points*1.1)}
// })
// console.log('addPoints :>> ', addPoints);

// //^ Збільшити кількість годин гравця по id. Переписати на тернарник
// const playerIdUpdate = 'player-4';
// const addPlayerHours = 30;

// const addingPlayerHoursForId = players.map((player)=> player.id === playerIdUpdate ? {...player, timePlayed: player.timePlayed + addPlayerHours} : player)
// console.log('addingPlayerHoursForId :>> ', addingPlayerHoursForId);

// //^ Отримати масив всіх гравців онлайн
// const playerOnline = players.filter((player)=>player.online === true)
// console.log('playerOnline :>> ', playerOnline);

// //^ Отримати масив всіх гравців офлайн
// const playerOffline = players.filter((player)=>player.online === false)
// console.log('playerOffline :>> ', playerOffline);

// //^ Отримати масив всіх хардкорних гравців з часом більше 250
// const playerHard = players.filter((player)=>player.timePlayed === 250)
// console.log('playerHard :>> ', playerHard);

// //^ Знайти гравця по id
// const findPlayerForId =  players.find((player)=>player.id ===  'player-3')
// console.log('findPlayerForId :>> ', findPlayerForId);

// //^ Знайти гравця по імені
// const findPlayerForName =  players.find((player)=>player.name ===  'Chelsy')
// console.log('findPlayerForName :>> ', findPlayerForName);

// //^ Перевірити чи всі гравці мають час більше 200
// const allPlayersHardTime = players.every((player)=>player.timePlayed > 200)
// console.log('allPlayersHardTime :>> ', allPlayersHardTime);

// //^ Перевірити чи всі гравці онлайн
// const allPlayersOline = players.every((player)=>player.online ===true)
// console.log('allPlayersHardTime :>> ', allPlayersHardTime);
