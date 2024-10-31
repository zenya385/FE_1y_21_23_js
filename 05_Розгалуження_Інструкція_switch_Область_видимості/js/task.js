// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".


const btn = document.querySelector('[type="submit"]');
const message = document.querySelector('.text')
const one = document.querySelector('.one');
const two = document.querySelector('.two');



btn.addEventListener('click', (e)=>{
    e.preventDefault()
 
        if(one.value && two.value){
        message.textContent = "Обидва поля заповнені";
           }else{
            message.textContent = "Не всі поля заповнені"
           }
})


