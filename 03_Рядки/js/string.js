
const string = "Teens";
const str = '5';
const strBool = 'true';
const nameUser = "Ivan";

// console.log(str);
// console.log(strBool);


//$ ==================   Метод indexOf() ============================
// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

// console.log(string.indexOf("n")); 


//$ ==================   Конкатенація рядків  ============================

// const message = "Hello" + ' ' + "my"+ ' ' + "friend";
// const result = 5 + "5";
// const res = " " + 5;
// const res1 = "5" + 5 + 5; //"555"
// const res2 =  5 + 5 + "5"; //"105"

// const name = "Mango";
// const mes = "Hello";

// console.log( " ${name} " +  + mes + "!");

//$ ==================   шаблонний рядок   ============================

const str1 = 'Hello';
const str2 = 'Java';
const str3 = 'Script';
console.log( `${str1} Dony, i'am a  ${str2} ${str3}`); //   ` `  шаблонний рядок
// console.log(`${name} ${mes} my friend!`);    




// console.log(message);
// console.log(typeof result);
// console.log(res1);
// console.log(res2);


//^$ ================== Властивості та методи рядків ============================
// length - властивість, повертає довжину рядка (число)
// console.log(string.length);
// console.log(message.length);

//% =========== toLowerCase() і toUpperCase() ====================
// - повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок

// console.log(string.toLowerCase());
// console.log(string.toUpperCase());

//% =========== indexOf() ====================
//  - поверне позицію (індекс) на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено

// console.log(string.indexOf("Te")); // 0
// console.log(string.indexOf("e")); //1
// console.log(string.indexOf("f")); // -1

//% =========== includes()   true або false  ====================
//  -  перевіряє чи входить підрядок в рядок, повертає true або false

// console.log(string.includes("Te")); // true
// console.log(string.includes("e")); // true
// console.log(string.includes("sn")); // false

//% =============== Метод endsWith() та startsWith() ==================
//чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

//% ========================== Метод trim() ==================

// const login = ' zen ';
// console.log('login:>>', login);
// console.log('login:>>', login.trim());

//% ========================== Метод padStart() та padEnd() ==================

// const jsFileName = 'script.js';

console.log(':>>', jsFileName.padStart(20, ')'));
// console.log(':>>', jsFileName.padEnd(19, ' qwe'));


//% ========================== Метод slicel()   slice(startIndex, endIndex)==================
// Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

// const prodName = 'Repair droid';

// const newProdName = prodName.slice(0, 6)
// console.log(prodName);
// console.log(newProdName);

// const fileName = 'styles.min.css, about.min.css, portfolio.min.css';
// const newFile = fileName.slice(0, fileName.length )
// console.log(newFile);


//% ========================== Метод replace() та replaceAll()  заміна ==================

const jsFileName = 'script.js';
const newJsFileName = jsFileName.replace('.js', '.min.js');

console.log('jsFileName:>>', jsFileName.replace('.js', '.min.js'));

console.log('newJsFileName:>>', newJsFileName);

console.log('jsFileName:>>', jsFileName);

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"