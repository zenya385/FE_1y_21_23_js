// Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

const btn = document.querySelector(".click-btn");
const text = document.querySelector(".title");

// const outputMessage = function(){
// text.textContent = "Hello World!"
// }

// const outputMessage = ()=>{
// text.textContent = "Hello World!"
// }

btn.addEventListener("click", () => {
  text.textContent = "Hello World!";
});
// console.log('btn :>> ', btn);

// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною

const checkBtn = document.querySelector(".checkBtn");

const randomText = document.querySelector(".random");
const randomNumber = Math.floor(Math.random() * 100 + 1);

// function checkGues() {
//     console.log('hello');
// }

const fn = () => {
  const input = document.querySelector("#guessField").value;
  const result = document.querySelector("#randomNumber");

  if (input === randomNumber) {
    result.textContent = "Вітаю!";
  } else {
    result.textContent = "Не вгадали, спробуйте ще!";
  }
};

checkBtn.addEventListener("click", fn);

// const checkGues = () =>{
//     console.log('helo');
// }

randomText.textContent = `Рандомне число ${randomNumber}`;
