// 3.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.innerText = ('Text1');
div.classList.add('wrap');
div.style.background = 'lightblue';


document.body.appendChild(div);

let block = document.getElementsByClassName('wrap');
let cloneNode = div.cloneNode(true);
cloneNode.innerText = 'Text2';
document.body.appendChild(cloneNode);

