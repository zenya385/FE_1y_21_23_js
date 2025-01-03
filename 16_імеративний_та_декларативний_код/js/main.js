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
const filteredNumbersD = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]


()=>{}    // анонімна стрілочна функція



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
 
  dirtyMultiply(numbers, 2);
 
  // Відбулася мутація вихідних Даних
  console.log(numbers); // [2, 4, 6, 8, 10]


//@ ======================== Чисті функції ==========================================


const pureMultiply = (array, value) => {
    const result = [];
 
    for (let i = 0; i < array.length; i += 1) {
      result.push(array[i] * value);
    }
 
    return result;
  };
 
  const numbersB = [1, 2, 3, 4, 5];
  const doubledNumbers = pureMultiply(numbers, 2);
 
  // Не сталося мутації вихідних даних
  console.log(numbers); // [1, 2, 3, 4, 5]
 
  // Функція повернула новий масив зі зміненими даними
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]