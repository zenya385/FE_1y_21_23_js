const printMessage = function (message) {
  console.log(message);
};

const higherOrderFunction = function (callback) {
  const string = "HOCs are awesome";
  callback(string);
};

//   higherOrderFunction(printMessage);

// //   for (let i = 0; i < 10; i++) {
// //     console.log(i);
// //       }

//       const reapeadLog = function(n) {

//         for (let i = 0; i < n; i++) {
//             console.log(i);
//               }
//       }

//       reapeadLog(3)

//     //   reapeadLog(10)

const printValue = function (value) {
  console.log(value);
};

const prettyPrint = function (value) {
  console.log("Logging value: ", value);
};

const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};
// Передаємо printValue як callback-функцію
//   repeat(3, printValue);

// Передаємо prettyPrint як callback-функцію
// repeat(5, prettyPrint);

// function name() {}
// () => {};

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// const pushEl = function (value) {
//   labels.push(`Label ${value + 1}`);
// };
//   (value) => { labels.push(`Label ${value + 1}`) }

// repeat(3, pushEl);

//   repeat(5, (value) => { labels.push(`Label ${value + 1}`)});

// repeat(10, pushEl)

// console.log(labels);

// const add = function( a, b) {
//    return a + b;
// }

// console.log(add(10, 15));
// console.log(add(150, 250));

// Напишіть функцію, яка приймає на вхід масив чисел і повертає новий масив, в якому кожний елемент є квадратом відповідного елементу вхідного масиву.

const numbers = [20, 10, 15, 74];
const numbers1 = [200, 100, 150, 740];

const powNumber = function (arr, pow) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const powNum = Math.pow(element, pow);
    console.log(powNum);
  }
};

// powNumber(numbers, 2);
// powNumber(numbers1, 3);

// Знайдіть суму елементів масиву з використанням колбек-функції
const array = [1, 2, 3, 4, 5];

function loginedNum(sum) {
  console.log("сума чисел масиву :>> ", sum);
}

function powNumder(num) {
  const pow = Math.pow(num, 2);
  console.log("Прведення до квадрату :>> ", pow);
}

// function sumArray(arr, callback) {
// let total = 0;

// for (const el of arr) {
//   // total = total + el
//   total += el
// }

// return callback(total)
// }

// function powNumder(num) {
//   const pow = Math.pow(num, 2)
//   console.log('Прведення до квадрату :>> ', pow);
// }

// const sumArray =  function(arr, callback) {
// let total = 0;

// for (const el of arr) {
//   // total = total + el
//   total += el
// }

// return callback(total)
// }

const sumArray = (arr, callback) => {
  let total = 0;

  for (const el of arr) {
    // total = total + el
    total += el;
  }

  return callback(total);
};

// sumArray(numbers, loginedNum);
// sumArray(array, powNumder);
// sumArray(numbers1, loginedNum);

// ============================= function declaration ===================================

// function fn(params) {
//   // params
//   // тіло функції
// }

// fn(argr);
// // ============================= function expression ===================================

// const fn = function(params){
//   // тіло функції
//   return
// }

// fn(argr);

// // ============================= arow function  ===================================
// const fn = (params) => {
//   // тіло функції
//   return
// }

// fn(argr);

// // анонімна стрілочна функція
// ()=>{
//   return
// };

// function name(a, b) {
//   // console.log(a);
//   // console.log( b );
// const total = a + b
// return  console.log('total :>> ', total);;

// }

// name(10, 15);
// name(100, 150);
// name(105, 155);
// name(107, 157);


// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {
  const arrName = names.split(',')
  const arrTel = phones.split(',')

for (let i = 0; i < arrName.length; i++) {
  const el = arrName[i];
  // console.log('el :>> ', el);
  
  console.log(`${arrName[i]}:`, Number(arrTel[i]));
  
}
}

printInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);