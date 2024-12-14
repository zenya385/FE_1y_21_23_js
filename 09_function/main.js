// const a = 15;
// const b = 1;
// const c = 5;

function totalNumbers(a, b, c) {
  const total = a + b + c;
  return total;
}

// console.log(totalNumbers(15, 1, 5));

// totalNumbers(15, 15, 15);

// console.log(totalNumbers(15, 15, 15));
// console.log(totalNumbers(10, 5, 155));
// console.log(totalNumbers(1478, 5, 175));
// console.log(totalNumbers(17855, 15635, 17855));

// const resFunction = totalNumbers(15, 15, 15);

// console.log(resFunction);

// console.log(total);

// console.log("Лог до функції");

// multiply(2, 3, 5); // Результат множення дорівнює 30

function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// console.log("Лог після функції");

// console.log("Лог до виклику функції multiply");

// multiply(2, 3, 5); // Результат множення дорівнює 30

// console.log("Лог після виклику функції multiply");

// Послідовність логів в консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"

// ================= funtion declaration =====================

function name(params) {
  // тіло фукції
}

// ================= funtion expression =====================

const fn = function (params) {
  // тіло фукції
};

// summNum( 20, 30); // помилка  Cannot access 'summNum' before initialization

const summNum = function (m, f, n = 0) {
  console.log(`Результат додавання дорівнює ${n + m + f}`);
};

// summNum( 20, 30, );

// console.log(age); //помилка
const age = (10)
  // ==================================== Задачки =================================

  // Напиши функцію яка повертає середнє значення з масиву чисел:
  // console.log(calculate([1, 2, 3, 4, 5])); // QWErty
  // console.log(calculate([6, 7, 8, 9, 10])); // MaNgO
  //  У цій функції ми передаємо масив чисел в якості параметру, обчислюємо їхню суму та повертаємо середнє значення.

 const arr =  [6, 7, 8, 9, 10]

//  let total = 0
//  for (let i = 0; i < arr.length; i += 1) {
//   const element = arr[i];
//   total += element
//   // console.log(total);
//    }



// // console.log(total);

// function calculate(numbers) {

// }

for(let i = 0; i <= 10; i += 1 ){
  // console.log(i);
  
}

// console.log(arr[1]);
// console.log(arr.length);


// for(let index = 0; index < arr.length; index += 1 ){
//   const maxNum = Math.max(maxNum)
//   console.log(maxNum);
//   }

// console.log(Math.max(Number([20, 10, 50, 40].join(' ')))); // 50

const numbers = [20, 10, 1500, 740]
const num = Math.max(...numbers)
console.log(num);


// let maxNum = 0
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   if (element > maxNum) {
//     maxNum = element
//   }
// }
// console.log(maxNum);


