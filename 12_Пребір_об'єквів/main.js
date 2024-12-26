// for (const key in object) {
// }

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // console.log(key);
  // console.log(book[key]);
}

// Object.keys метод

const keys = Object.keys(book);

for (const key of keys) {
  // console.log(key);
  // console.log(book[key]);
}

// Object.values метод

// const values = Object.values(book)

// console.log(values);

// exsample
// підрахувати загальну кількість продуктів

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods);

//   console.log(values);  // масив

let total = 0;

for (const el of values) {
  total += el;
}

// console.log(total);

// Object.entries метод

const entries = Object.entries(book);

// console.log(entries);

// ... sread - операція розпилення або розпорошення.

const numders = [2, 3, 4, 5, 6, 7, 8, 9];
const numders1 = [10, 11, 12, 13];

const min = Math.min(...numders);

// console.log(min);

const allArr = numders.concat(numders1);

const allArr1 = [...numders, ...numders1, 15, 20];

const el = { ...numders };
// console.log(allArr);
// console.log(allArr1);
// console.log(el);

const cars = [
  {
    brend: "Mercedes",
    model: "S222",
    year: "2022",
    color: "Black",
  },
  {
    brend: "Audi",
    model: "Qatro",
    year: "2020",
    color: "White",
  },
  {
    brend: "Opel",
    model: "Omega",
    year: "2010",
    color: "Green",
  },
];

for (const car of cars) {
  // console.log(car);
  const carBrend = car.brend;
  const values = Object.values(car);
  const keys = Object.keys(car);
  //  console.log(carBrend);

  //  console.log(values);
  //  console.log(keys);

  for (const key in car) {
    const element = car[key];

    // console.log(element);
  }
}


const carAudi = cars[1].brend

// console.log('Audi :>> ', carAudi);



const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, 2, 3, ...currentWeekTemps, 3];
// console.log(allTemps); // [14, 25, 11, 2, 3, 23, 17, 18, 3]


const arr1 = [11,12,45,78,124];
const arr2 = [ 1,2,3,4,5,6];

const allArr3 = arr1.concat(arr2);

const allArr4 = [...arr1, ...arr2]

// console.log(allArr4);


const object1 = {a:1, b:2, c:3}
const object2 = {x:5, y:6, c:10}
const objectAll1 = {...object1, ...object2}
const objectAll2 = {...object2, ...object1}

console.log('objectAll1 :>> ', objectAll1);
console.log('objectAll2 :>> ', objectAll2);
