
const choiceDrink = document.querySelector('.choice-drink');
const text  =  document.querySelector('.text');



choiceDrink.addEventListener('change', ()=>{
    let msg = '';
    
switch (choiceDrink.value) {
    case 'coffe':
        msg = "Ви обрали напій каву"
        break;
    case 'tea':
          msg = "Ви обрали напій чай"
        break;

    case 'juice':
          msg = "Ви обрали напій сік"
        break;

    default:
          msg = "Оберіть напій зі списку"
        break;
}
text.textContent = msg;

})


// ==========================================

const colorText  =  document.querySelector('.color');
const btnColor = document.querySelector('[type="button"]');

let message = '';
let colorStyle = '';
btnColor.addEventListener("click", (e)=>{
    e.preventDefault()
    
    const inputColor = document.querySelector('#input-color').value;
    

    switch (inputColor) {
    case 'червоний':
        message = 'стоп';
        colorStyle = 'red';
        break;
    case 'зелений':
         message = 'йти';
         colorStyle = 'green';
        break;
    case 'жовтий':
         message = 'чекати';
         colorStyle = 'yellow';
        break;

    default:
        break;
}

colorText.textContent = message;
colorText.style.color = colorStyle;
})




