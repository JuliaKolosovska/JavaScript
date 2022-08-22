//7. Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
let div = document.createElement('div');
div.classList.add('text');
div.style.width='100px';
div.style.height='100px';
div.style.background='silver';

document.body.appendChild(div);
div.onclick=function (){
    let block = document.getElementsByClassName('text');
    let blockHide=this.style.visibility='hidden';

    document.body.appendChild(blockHide);
};

// 8. Створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let userAge=document.getElementsByClassName('age');

if (userAge.value >= 18){
    alert('enter the site');
} else if(userAge.value <18){
    alert('access is denied');
}
