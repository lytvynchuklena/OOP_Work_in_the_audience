// WORK IN THE AUDIENCE


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, producer, age, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.age = age;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`)
//     }
//
//     this.info = function () {
//         console.log(this.model, this.producer, this.age, this.maxSpeed, this.engineCapacity);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.age = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let audi = new Car('Q7', 'audi', 2018, 250, 500);
// audi.drive();
// audi.info();
// console.log(audi);
// console.log(audi.maxSpeed);
// audi.increaseMaxSpeed(1000);
// console.log(audi.maxSpeed);
// audi.addDriver({
//     name: 'Vasya',
//     exp: '3 years',
//     starts: '5 star'
// });
// console.log(audi.driver);


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

//
// class Car {
//     constructor(model, producer, age, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.age = age;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
//     }
//
//     info() {
//         console.log(this.model, this.producer, this.age, this.maxSpeed, this.engineCapacity);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.age = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let auto1 = new Car('q7', 'audi', '2019', '250', '500');
// let drive = auto1.drive();
// let info = auto1.info();
//
// console.log(auto1.maxSpeed);
//
// auto1.increaseMaxSpeed(1000);
//
// console.log(auto1.maxSpeed);
//
// auto1.changeYear(1989);
// console.log(auto1.age);
//
// auto1.addDriver({
//         name: 'Vasya',
//     exp: '3 years',
//     starts: '5 star'
// }
// )
// console.log(auto1.driver);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, sizeFoot) {
//         this.name = name;
//         this.age = age;
//         this.sizeFoot = sizeFoot;
//     }
//
// }
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let prince = new Prince('cinderela2', '20', 32);
//
//
// let cinderellas = [];
// cinderellas.push(new Cinderella('cinderela1', 10, 18));
// cinderellas.push(new Cinderella('cinderela2', 20, 32));
// cinderellas.push(new Cinderella('cinderela3', 18, 28));
// cinderellas.push(new Cinderella('cinderela4', 19, 29));
// cinderellas.push(new Cinderella('cinderela5', 35, 30));
// cinderellas.push(new Cinderella('cinderela6', 16, 24));
// cinderellas.push(new Cinderella('cinderela7', 28, 23));
// cinderellas.push(new Cinderella('cinderela8', 21, 36));
// cinderellas.push(new Cinderella('cinderela9', 29, 38));
// cinderellas.push(new Cinderella('cinderela10', 30, 39));
// cinderellas.push(new Cinderella('cinderela11', 36, 40));
//
//
// for (let cinderella of cinderellas) {
//     if (cinderella.sizeFoot === prince.shoe) {
//         console.log(cinderella);
//     }
// }

// console.log(cinderellas);


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name, age, shoe,) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
// }
//
//
// function Prince(name, age, sizeFoot) {
//     this.name = name;
//     this.age = age;
//     this.sizeFoot = sizeFoot;
//     this.searchCinderella = function (cinderellas) {
//         for (let cinderella of cinderellas) {
//             if (cinderella.shoe === this.sizeFoot) {
//                 console.log(cinderella);
//             }
//         }
//     }
// }
//
//
// let cinderellas = [];
// cinderellas.push(new Cinderella('cinderela1', 10, 18));
// cinderellas.push(new Cinderella('cinderela2', 20, 32));
// cinderellas.push(new Cinderella('cinderela3', 18, 28));
// cinderellas.push(new Cinderella('cinderela4', 19, 29));
// cinderellas.push(new Cinderella('cinderela5', 35, 30));
// cinderellas.push(new Cinderella('cinderela6', 16, 24));
// cinderellas.push(new Cinderella('cinderela7', 28, 23));
// cinderellas.push(new Cinderella('cinderela8', 21, 36));
// cinderellas.push(new Cinderella('cinderela9', 29, 38));
// cinderellas.push(new Cinderella('cinderela10', 30, 39));
// cinderellas.push(new Cinderella('cinderela11', 36, 40));
//
// let prince = new Prince('cinderela2', '20', 32);
//
// prince.searchCinderella(cinderellas);












