//  const select = document.querySelector('[name="select"]')

// //  console.dir(select);



//  select.addEventListener('click',(e)=>{
//     e.preventDefault();

//     console.log('e :>> ', e);
// //    const option = 
//  })


// ================================ масив ===================

// const array = []  -пустий масив;

const array = ["Ivan", 'Olga', 7, true, undefined];

const users = ["Ivan", "Vasyl", "Ira", "Olga","Kiwi", "Poly", "Ajax", "Alex"]
;

// console.log(users.length); // довжина масиву

// console.log(users);

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[users.length - 1]);

// users[1] = "Pango";
// users[4] = "Mango";

// console.log(users);
// console.log(users[users.length - 1]);

//% ===============    Ітерація по масиву ================

// for (let i = 0; i < users.length; i += 1) {
//       const user = users[i];
//     const counter = [i + 1]
//     console.log(`${counter}.  ${user}`);
//     }

//% ===============    Ітерація по масиву ================

const numbers = [];

// for (let i = 0; i <= 5; i += 1) {
//     numbers.push(`Число-${i}`)
//     // numbers.unshift(`Число-${i}`)
//     // console.log(i);
//     console.log(numbers);
// }

//% ===============    Інструкція for of  ================
const str = 'Java Script';

// for (const element of str) {
//     console.log(element);   
// }

// for (const element of users) {
//     console.log(element);   
// }

const findUser = "Vasyl";
let msg = `Kористувача ${findUser} немає`;

for (const user of users) {
    
    if (user === findUser) {
        msg = `Ми знайшли користувача ${findUser}`;
        break;
    }
    
    // console.log(user);
}
console.log(msg);
