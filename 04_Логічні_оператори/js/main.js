 /*
 * Логічне І (оператор &&)
 * - Запинається на брехні
 * - Повертає те на чому запнулось або останній операнд
 */

//!       0 ; null; undefined; NaN; ""; false

// console.log( 1 && 4 );

// console.log(1 && 4 && 7 && 'mango');

console.log(1 && false && 7 && 'mango');

// console.log(1 && "false" && 7 && 'mango');

// console.log( 10 && '' && 7 && 'mango');


// const num = 20;

// const result = num > 10 && num < 30;
// console.log(result);

// const num = 40;
// const result = num > 10 && num < 30;
// console.log(result)

true && false && true && false && true && false;

/*
 * Логічне АБО (оператор ||)
 * - Запинаєтьс на правді
 * - Повертає те на чому запнулось або останній операнд
 */


// console.log(1 || "false" || 7 || 'mango');

// console.log("" || "" || null || 0 || undefined);

// const num = 40;
// const result = num < 10 || num > 30;
// console.log(!result); 

/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */

// console.log(!"");


// *3. Розібрати та продемонструвати роботу розгалуження
 //* Оператор розгалуження if


 // if (умова) {
// тіло if
// }

// if (умова) {
// тіло if
// } else {
// тіло else
// }

// if (умова) {
//  тіло if
// } else if (умова) {
//  тіло else if
// }  else {
//  тіло else
// }


// if(10 < 5){
//    console.log("Yes");
  
// }else{
//     console.log("No!"); 
// }

// let cost = 0;
// const subscription = 'p';
         
// if (subscription === 'pro') {
//   cost = 100;
// }

// console.log(cost);



// const name = "Ivan";

// if (!name) {
//   console.log(name);
// }


// if (name) {
//   console.log("Так є таке ім'я");
// } else {
//   console.log("Немає іВАНА");
// }



// const salary = 499;

//  if(salary >= 500 && salary <= 1000){
//   console.log("jun");
// } else if(salary > 1000){
//   console.log("Ти молодець!");
// } else{
//   console.log("Intern");
// }


// const age = 2;
// const msgAd = "adult"
// const msgTe = "teens"

// if(age >= 18){
//   console.log("adult");
// } else {
//   console.log("teens");
// }


// ========================= Тернарний оператор ===============================

// умова ? {вираз якщо умова правдива} : {вираз якщо умова не правдива}

// const msg = (age >= 18) ? msgAd : msgTe;
 
// console.log('msg :>> ', msg);


// console.log('msg до :>> ');

// if ('qwerty') {
//   console.log( 'Привіт' );
//  }
 
// console.log('msg після :>> ');


// Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”

const responseUser = prompt('Яка офіційна назва JavaScript?')
// console.log(responseUser);

// if (responseUser === 'ECMAScript') {
//   console.log('Правильно');
  
// } else {
//   console.log('Ви не знаєте? ECMAScript!');
  
// }

const msg = (responseUser === 'ECMAScript') ? 'Правильно' :
'Ви не знаєте? ECMAScript!';
 
console.log(msg);
