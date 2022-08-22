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
const input = document.createElement('input');
input.type = 'number';

const button = document.createElement('button');
button.innerText = 'Click'

document.body.append(input, button);

button.onclick = () => {
    let value = input.value;

    if (value > 0 && value < 18) {
        alert('Stop');
    } else if (value >= 18) {
        alert('Hello');
    } else {
        alert('Go away');
    }
}





// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
//
// const input1 = document.createElement('input');
// input1.setAttribute('placeholder', 'Enter name');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
//
// const button = document.createElement('button');
// button.innerText = 'Click';
//
// document.body.append(input1, input2, input3, button);
//
// button.addEventListener('click', function () {
//     let row = input1.value;
//     let col = input2.value;
//     let elem = input3.value;
//
//     let generator = (tr, td, text) => {
//
//
//         const htmlTableElement = document.createElement('table');
//         document.body.appendChild(htmlTableElement);
//
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr');
//             htmlTableElement.appendChild(tr);
//
//             for (let j = 0; j < td; j++) {
//                 const td = document.createElement('td');
//                 td.innerText = `${text}`;
//                 tr.appendChild(td);
//             }
//         }
//
//     }
//     generator(row, col, elem);
//     button.disabled = true;
// })