const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rooms = 150;

const hotel = {
  // 'ключ' :  значение,
  // key: value
age : [],
  name: "Resort Hotel",
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  stars: 5,
  rooms
};

// console.log(arr[1]);
// console.log(hotel);

// console.log(hotel.name);
// console.log(hotel['name']);

// hotel.name = "Residention Santa";
hotel['name'] = "Residention Santa";

// console.log(hotel.name);

hotel.street = "Time squear";

// console.log(hotel);
// console.log(hotel.street);


// delete hotel.age
// delete hotel['age']

// console.log(hotel);


const key = 'person';



// const getKey = function () {
//   return 'age';
// };


// // Computed properties
// const object = {
//   key: 'Mango',
// // getKey : function () {
// //     return 'age';
// //   }

// getKey() {
//     return 'age';
//   }

  

// };


// console.log(object.getKey());



const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,

getBook(){
  console.log(book.title);
  },

addBook(){
  console.log("Цей метод буде додавати нову книгу - властивість books");
}
};

// book.getBook()
// book.addBook('new book')


// console.log(book.genres[1]);

// // book.genres[2] =  "drama";
// book.genres.push("drama");

// console.log(book);
// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']




const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: [],
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// console.log(user.location.country);


const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books
    // console.log(this);
    // console.log(bookShelf.books);
  },
  addBook(newBook){
    this.books.push(newBook)
  },

  deleteBook(bookName){
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  }
};

// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
bookShelf.addBook("qwerty")
bookShelf.addBook("ghjk")
bookShelf.addBook("dfghjkl")
// bookShelf.deleteBook("The Last Kingdom")

// console.log(bookShelf.getBooks());
console.log(bookShelf);



