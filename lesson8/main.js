// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let u1 = new User(15964, 'Kolya', 'Kenyskkjn', 'vgbhnmkl@gmail.com', 256938416);
// let u2 = new User(8362754127, 'Viktor', 'Naifjernki', 'mimnthbgvf@gmail.com', 982525425);
// let u3 = new User(275257, 'Vasya', 'Polkejncef', 'Polkejncef@gmail.com', 83275273);
// let u4 = new User(542752378, 'Anna', 'Solofkka', 'Solofkka@gmail.com', 5256526);
// let u5 = new User(56165, 'Katya', 'Hionfjvncd', 'Hionfjvncd@gmail.com', 627523738);
// let u6 = new User(63874, 'Denys', 'Lopclemv', 'Lopclemv@gmail.com', 534256);
// let u7 = new User(5244, 'Alina', 'Kodncjwdvfw', 'Kodncjwdvfw@gmail.com', 4254523);
// let u8 = new User(76864, 'Roman', 'Joslkmjvkf', 'Joslkmjvkf@gmail.com', 83658655);
// let u9 = new User(5243, 'Bogdan', 'Rpomcodfv', 'Rpomcodfv@gmail.com', 6235438);
// let u10 = new User(76864, 'Igor', 'Wnjwljgwe', 'Wnjwljgwe@gmail.com', 5246385);
// let array = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];
// console.log(array);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filteredArray = array.filter(value => value.id % 2 === 0);
// console.log(filteredArray);



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
//
// let sortedArray = array.sort((a, b) => {
//     return a.id - b.id;
// });
// console.log(sortedArray);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let cl1 = new Client(15964, 'Kolya', 'Kenyskkjn', 'vgbhnmkl@gmail.com', 256938416,['banana', 'apple', 'pear', 'grape']);
// let cl2 = new Client(8362754127, 'Viktor', 'Naifjernki', 'mimnthbgvf@gmail.com', 982525425, ['banana', 'pear', 'grape']);
// let cl3 = new Client(275257, 'Vasya', 'Polkejncef', 'Polkejncef@gmail.com', 83275273, ['banana', 'grape']);
// let cl4 = new Client(542752378, 'Anna', 'Solofkka', 'Solofkka@gmail.com', 5256526, ['banana', 'apple', 'pear', 'grape', 'coconut']);
// let cl5 = new Client(56165, 'Katya', 'Hionfjvncd', 'Hionfjvncd@gmail.com', 627523738, ['banana', 'watermelon', 'coconut']);
// let cl6 = new Client(63874, 'Denys', 'Lopclemv', 'Lopclemv@gmail.com', 534256, ['banana', 'apple']);
// let cl7 = new Client(5244, 'Alina', 'Kodncjwdvfw', 'Kodncjwdvfw@gmail.com', 4254523, ['banana', 'coconut']);
// let cl8 = new Client(76864, 'Roman', 'Joslkmjvkf', 'Joslkmjvkf@gmail.com', 83658655, ['banana']);
// let cl9 = new Client(5243, 'Bogdan', 'Rpomcodfv', 'Rpomcodfv@gmail.com', 6235438, ['banana', 'berries','apple', 'pear', 'grape', 'coconut']);
// let cl10 = new Client(76864, 'Igor', 'Wnjwljgwe', 'Wnjwljgwe@gmail.com', 5246385, ['banana', 'berries','apple']);
// let clients = [cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10];
// console.log(clients);
// let sortedClients = clients.sort((a, b) => {
//     return a.order.length - b.order.length;
// });
// console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

class Car {
    constructor(model, yearOfProduction, maxSpeed, engineVol) {
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.maxSpeed = maxSpeed;
        this.engineVol = engineVol;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);

    }

    info() {

        console.log(`model:${this.model}`, `yearOfProduction:${this.yearOfProduction}`, `maxSpeed:${this.maxSpeed}`,`engineVol:${this.engineVol}`);
    }

    increaseMaxSpeed(newSpeed) {

        let res = newSpeed + this.maxSpeed;
        return res;

    }
    changeYear (newValue){

        this.yearOfProduction=newValue;
        console.log(`new year of production:${this.yearOfProduction}`)

    }
    // addDriver (driver){
    //    return this.driver=driver;
    //    driver=[name,age];
    // }

   addDriver(model, yearOfProduction, maxSpeed, engineVol, driver) {
        Car.apply(this, driver);
        this.driver = driver;


    }
}

let car1 = new Car('Audi Q7', 2020, 250, 3.0);
console.log(car1);
car1.drive();
car1.info();
console.log(car1.increaseMaxSpeed(20));
console.log(car1.changeYear(2023));
console.log(car1.addDriver(['Kolya', 30,'nrvoiermfv']));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку