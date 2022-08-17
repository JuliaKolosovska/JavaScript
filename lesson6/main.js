// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);
//
// // or
//
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//

// let str = ' dirty string   ';
// let a = str.indexOf('d');
// let b = str.indexOf('g');
// console.log(str.slice(a, b + 1));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = str.split(' ');
// console.log(stringToarray);
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let newArr = arr.map((value) => value + '');
// console.log(newArr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11, 21, 3];
// let ascending = nums.sort((a, b) => {
//     return a - b;
// });
// console.log(ascending);
// // let descending = nums.sort((a, b) => {
// //     return b - a;
// // });
// // console.log(descending);
//
// function sortNums (num, direction) {
//     if (direction === 'ascending') {
//         num.sort((a, b) => a - b);
//     }
//     if (direction === 'descending') {
//         num.sort((a, b) => b - a)
//     }
//
// }
// sortNums(nums, 'ascending');
// console.log(nums)
// //
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//


// let sort = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// });
// console.log(sort);
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let cards=[
//     {cardSuit:'spade' , value:'6', color:'black'},
//     {cardSuit:'spade' , value:'7', color:'black'},
//     {cardSuit:'spade' , value:'8', color:'black'},
//     {cardSuit:'spade' , value:'9', color:'black'},
//     {cardSuit:'spade' , value:'9', color:'black'},
//     {cardSuit:'spade' , value:'10', color:'black'},
//     {cardSuit:'spade' , value:'ace', color:'black'},
//     {cardSuit:'spade' , value:'jack', color:'black'},
//     {cardSuit:'spade' , value:'queen', color:'black'},
//     {cardSuit:'spade' , value:'king', color:'black'},
//     {cardSuit:'spade' , value:'joker', color:'black'},
//     {cardSuit:'clubs' , value:'6', color:'black'},
//     {cardSuit:'clubs' , value:'7', color:'black'},
//     {cardSuit:'clubs' , value:'8', color:'black'},
//     {cardSuit:'clubs' , value:'9', color:'black'},
//     {cardSuit:'clubs' , value:'9', color:'black'},
//     {cardSuit:'clubs' , value:'10', color:'black'},
//     {cardSuit:'clubs' , value:'ace', color:'black'},
//     {cardSuit:'clubs' , value:'jack', color:'black'},
//     {cardSuit:'clubs' , value:'queen', color:'black'},
//     {cardSuit:'clubs' , value:'king', color:'black'},
//     {cardSuit:'clubs' , value:'joker', color:'black'},
//     {cardSuit:'diamond' , value:'6', color:'red'},
//     {cardSuit:'diamond' , value:'7', color:'red'},
//     {cardSuit:'diamond' , value:'8', color:'red'},
//     {cardSuit:'diamond' , value:'9', color:'red'},
//     {cardSuit:'diamond' , value:'9', color:'red'},
//     {cardSuit:'diamond' , value:'10', color:'red'},
//     {cardSuit:'diamond' , value:'ace', color:'red'},
//     {cardSuit:'diamond' , value:'jack', color:'red'},
//     {cardSuit:'diamond' , value:'queen', color:'red'},
//     {cardSuit:'diamond' , value:'king', color:'red'},
//     {cardSuit:'diamond' , value:'joker', color:'red'},
//     {cardSuit:'heart' , value:'6', color:'red'},
//     {cardSuit:'heart' , value:'7', color:'red'},
//     {cardSuit:'heart' , value:'8', color:'red'},
//     {cardSuit:'heart' , value:'9', color:'red'},
//     {cardSuit:'heart' , value:'9', color:'red'},
//     {cardSuit:'heart' , value:'10', color:'red'},
//     {cardSuit:'heart' , value:'ace', color:'red'},
//     {cardSuit:'heart' , value:'jack', color:'red'},
//     {cardSuit:'heart' , value:'queen', color:'red'},
//     {cardSuit:'heart' , value:'king', color:'red'},
//     {cardSuit:'heart' , value:'joker', color:'red'}];
//
//

// let spadeAce = cards.find((card) => {
//         if (card.cardSuit === 'spade' && card.value === 'ace') {
//             console.log(card)
//     }
// }
// );
// let allSix=cards.filter(value =>value.value==='6');
// console.log(allSix);
// let allRed=cards.filter(value => value.color==='red');
// console.log(allRed);
// let allDiamond=cards.filter(value => value.cardSuit==='diamond');
// console.log(allDiamond);
// let allClubs=cards.filter(value => value.cardSuit==='clubs');
// console.log(allClubs.subarray(3));

 //останнє чомусь показує помилку, ніби такої функції не існує. В інтернеті пише, що таке є,
// я робила по принципу ".substring", який Сергій показував нам на лекції



//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduse=cards.reduce((newCard, card) =>{
//     if(card.cardSuit==='spade'){
//         newCard.spades.push(card);
//     } if(card.cardSuit==='diamond') {
//         newCard.diamonds.push(card);
//     }if(card.cardSuit==='heart') {
//         newCard.hearts.push(card);
//     }if(card.cardSuit==='clubs') {
//         newCard.clubs.push(card);
//     }
// return newCard;
//
// }, {spades:[], diamonds:[],hearts:[],clubs:[]});
// console.log(reduse);