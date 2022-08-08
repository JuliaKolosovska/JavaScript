// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b){
//     let res= a*b;
// return res;
//
// }
// console.log(area(30,20))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function area(b) {
//     let res = 3.1415* (b * b);
//     return res;
// }
// console.log(area(20))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function area(a, b) {
//     let res = 3.1415 * a * (b * b);
//     return res;
// }
//
// console.log(area(10, 20))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function writer(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
//
// }
//
// writer(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// paragraf('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda facere sequi sit! Explicabo ipsam neque nihil odio officia possimus quisquam sit vitae. Dignissimos, laboriosam minus necessitatibus neque rem rerum tempore.')
// paragraf("hgfjhkjkfgjhjk")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text) {
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>');
//
// }
//
// list('ujyhgvf');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(text, liNumber) {
//
//     document.write('<ul>');
//
//         document.write(`<li>${text}</li>`);
//
//     document.write('</ul>')
// }
//
// list('ujyhgvf', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrayInList(...items) {
//     document.write('<ul>');
//
//     for (const item of items) {
//
//         document.write(`<li>${item}</li>`)
//
//     }
//
//     document.write('</ul>')
// }
//
// arrayInList(1, 'vecd', 456, true, 'gvhbjnkm')

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users=[
//     {name: 'max', id: 'superMax', age: 12},
//     {name: 'roman', id: 'romanex', age: 32},
//     {name: 'igor', id: 'igorOk', age: 56},
//     {name: 'oleh', id: 'olehn', age: 30},
//     {name: 'misha', id: 'michael', age: 19},
//     {name: 'katia', id: 'kate123', age: 29},
//     {name: 'ania', id: 'anna.anna', age: 62},
//     {name: 'denys', id: 'denden', age: 55},
//     {name: 'viktor', id: 'vik.sil', age: 15},
//     {name: 'boris', id: 'boriaya', age: 22}
// ];
// function arrPrinter(arr){
//     for(let i=0; i<arr.length; i++){
//         document.write(`
//         <div>Name: ${arr[i].name} id: ${arr[i].id} Age: ${arr[i].age}</div>
// `)
//     }
// }
// arrPrinter(users)
// - створити функцію яка повертає найменьше число з масиву
// function minNumber(arr){
//     let min=arr[0];
//     for (let element of arr){
//         if(element<=min){
//             min=element;
//         }
//     }
//     return min;
// }
//
// console.log(minNumber(4, 5, 9, 3, 4, -10, 46));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumElements() {
//     let res = 0;
//     switch (arguments[0]) {
//         case '+':
//             for (let i = 1; i < arguments.length; i++) {
//                 const num = arguments[i];
//                 res += num;
//             }
//             break;
//
//
//             return res
//     }
// }
// console.log(sumElements(2, 5, 8))