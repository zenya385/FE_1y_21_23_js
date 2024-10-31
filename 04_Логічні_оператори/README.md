 /*
 * Логічне І (оператор &&)
 * - Запинається на брехні
 * - Повертає те на чому запнулось або останній операнд
 */


console.log(1 && 4 && 7 && 'mango');


/*
 * Логічне АБО (оператор ||)
 * - Запинаєтьс на правді
 * - Повертає те на чому запнулось або останній операнд
 */


console.log("name" || "" || null || 0 || undefined);


/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */


console.log(!" ");


 3. Розібрати та продемонструвати роботу розгалуження
/*
 * Оператор розгалуження if
 */
if(true){


console.log("Hello!");
}
console.log("Hi!");




/*
 * Оператор розгалуження if...else
 */
if(100 < 50){
    console.log("Перша умова вірна");
} else {
    console.log("Перша умова не вірна");
}
console.log("Код після розгалуження");


/*
 * Оператор розгалуження else...if
 */

 // if (умова) {
// тіло if
// }


const salary = 500;
    // false            false
if( salary >= 1000 && salary < 2000){
    console.log("Рівень 1");
    //       false              false
} else if( salary >= 2000 && salary < 3000 ){
    console.log("Рівень 2");
    //     false
} else if (salary > 3000){
    console.log("Рівень 3");
} else {
    console.log("Працюй більше!");
}


console.log("Hello");
Переписати код використовуючи тернарний оператор


/*
 * Тернарний оператор
 */
const balance = 1000;
// let message;


if(balance > 1){
   let message = "Ваш баланс позитивний!"
   console.log(message);
   const a = 5;
} else {
   let message = "Ваш баланс негативний!"
   console.log(message);
   const a = 10;
}


const message = balance > 1 ? "Ваш баланс позитивний!" : "Ваш баланс негативний!"
console.log(message);
