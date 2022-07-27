// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array=[3.5, 86, true, 'flower', false, 'car', 95, 6, 'dog',true];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1= {
    title: 'The Hobbit',
    pageCount: 300,
    genre: 'High fantasy'

}
let book2= {
    title: 'The Great Gatsby',
    pageCount: 280,
    genre: 'Tragedy'

}
let book3= {
    title: 'Harry Potter and...',
    pageCount: 416,
    genre: 'Fantasy'

}



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let book4= {
    title: 'The Hobbit',
    pageCount: 300,
    genre: 'High fantasy',
    autors: [{name: 'John Ronald Reuel Tolkien', age: 81}]
}

let book5= {
    title: 'The Great Gatsby',
    pageCount: 280,
    genre: 'Tragedy',
    autors: [{name: 'F. Scott Fitzgerald', age: 44}]
}
let book6= {
    title: 'Harry Potter and...',
    pageCount: 416,
    genre: 'Fantasy',
    autors: [{name: 'J.K. Rowling', age: 5}]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users=[
    {name: 'max', username: 'superMax', password: 123456},
    {name: 'roman', username: 'romanex', password: 111111},
    {name: 'igor', username: 'igorOk', password: 'igor123'},
    {name: 'oleh', username: 'olehn', password: 'hbgvf'},
    {name: 'misha', username: 'michael', password: 'nhtbggb'},
    {name: 'katia', username: 'kate123', password: 'FFDffgg'},
    {name: 'ania', username: 'anna.anna', password: 'brDeFt'},
    {name: 'denys', username: 'denden', password: 'hbgfv'},
    {name: 'viktor', username: 'vik.sil', password: 112233},
    {name: 'boris', username: 'boriaya', password: 595959}
    ];

    let user1= users[0];
    let user2= users[1];
    let user3= users[2];
    let user4= users[3];
    let user5= users[4];
    let user6= users[5];
    let user7= users[6];
    let user8= users[7];
    let user9= users[8];
    let user10= users[9];

    console.log(user1.password);
    console.log(user2.password);
    console.log(user3.password);
    console.log(user4.password);
    console.log(user5.password);
    console.log(user6.password);
    console.log(user7.password);
    console.log(user8.password);
    console.log(user9.password);
    console.log(user10.password);



