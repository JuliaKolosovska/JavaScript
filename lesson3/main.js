// - Є змінна х, якій ви надаєте довільне числове значення.
//         Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//         що дорівнює 1, 0, -3

// let x = +prompt('введіть число');
// console.log(x);
// if (x === 0) {
//     document.write('невірно');
// } else {
//     document.write('вірно')
// }

//     - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
//     години попадає число
//     (в першу, другу, третю или четверту частину години).

// let time = +prompt('enter minutes');
// if (time >= 0 && time <= 15) {
//     console.log('first quarter')
// } else if (time >= 16 && time <= 30) {
//     console.log('second quarter')
// } else if (time >= 31 && time <= 45) {
//     console.log('third quarter')
// } else if (time >= 46 && time <= 59) {
//     console.log('fourth quarter')
// } else {
//     console.log('false')
// }


//     - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
//     це число (у першу, другу чи третю).

// let day = +prompt('enter day');
// if (day >= 1 && day <= 10) {
//     console.log('first')
// } else if (day >= 11 && day <= 20) {
//     console.log('second')
// } else if (day >= 21 && day <= 31) {
//     console.log('third')
// } else {
//     console.log('false')
// }
//
//     - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let schedule = +prompt('enter day number');
// switch (schedule) {
//     case 1:
//         document.write('monday');
//         break;
//     case 2:
//         document.write('tuesday');
//         break;
//     case 3:
//         document.write('wensday');
//         break;
//     case 4:
//         document.write('thursday');
//         break;
//     case 5:
//         document.write('friday');
//         break;
//     case 6:
//         document.write('saturday');
//         break;
//     case 7:
//         document.write('sunday');
//         break;
//     default:
//         document.write('false')
// }

//
//         - Користувач вводить або має два числа.
//             Потрібно знайти та вивести максимальне число з тих двох .
//             Також потрібно врахувати коли введені рівні числа.


// let a = +prompt('enter A');
// let b = +prompt('enter B');
// if (a > b) {
//     document.write(a)
// } else if (b > a) {
//     document.write(b)
// } else if (a === b) {
//     document.write('перемогла дружба=)')
// } else {
//     document.write('false')
// }

//
//         - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//         Напишіть код який,
//             за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х
//             являється falsy (хибноподыбне, тобто кастується до false)


// let x=prompt('enter anything')|| 'default';
// console.log(x)



