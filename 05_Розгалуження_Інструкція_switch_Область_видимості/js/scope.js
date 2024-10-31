// ================================== Область видимості змінних =============================================

//  ============= Global scope

// const value = 5;

// if (true) {
// console.log("Block scope: ", value); // 5
// }
// console.log("Global scope: ", value); // 5

//  ============= Block scope

// if (true) {
//     const value = 5;
//     console.log("Block scope: ", value); // 5
//   }

//   console.log("Global scope: ", value); // ReferenceError: value is not defined

// const global = "global";

// if (true) {
//   const blockA = "block A";

//   console.log(global); // "global"
//   console.log(blockA); // "block A"
//   console.log(blockC); // ReferenceError: value is not defined

//   if (true) {
//     const blockB = "block B";

//     console.log(global); //  "global"
//     console.log(blockA); //  "block A"
//     console.log(blockB); // "block B"
//     console.log(blockC); // ReferenceError: value is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   console.log(global); // "global"
//   console.log(blockA); // ReferenceError: value is not defined
//   console.log(blockB); // ReferenceError: value is not defined
// }

// console.log(global); // "global"
// console.log(blockA); //  ReferenceError: value is not defined
// console.log(blockB); //  ReferenceError: value is not defined
// console.log(blockC); //  ReferenceError: value is not defined


// ==============================================================================================

const b = 10;
const a = 20;

if (true) {
const a = 5;
console.log(a);
}

const c = b + a
console.log(c); // ReferenceError: value is not defined