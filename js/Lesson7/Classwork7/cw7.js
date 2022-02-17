// // Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model,producer,years,maxspeed,engine){
//     this.model=model;
//     this.producer=producer;
//     this.years=years;
//     this.maxspeed=maxspeed;
//     this.engine=engine;
//     // drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive=function (){
//          console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
    // info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    // this.info=function (){
    //     for (let carKey in this) {
    //         if(typeof carKey!=='function'){
    //             console.log(`${carKey} - ${this[carKey]}`)
//             }
//         }
//     }
//     // increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed=function (newSpeed){
//         this.maxspeed=this.maxspeed+newSpeed
//     }
//     // changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear=function (newValue){
//         this.years=newValue
//     }
//     // addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver=function (driver){
//         this.drive=driver
//     }
// // }
// let nissanCar = new Car('Nissan', 'Japan', 2015, 230, 1.6);
// console.log(nissanCar)
// nissanCar.drive()
// nissanCar.info()
// nissanCar.increaseMaxSpeed(20)
// nissanCar.changeYear(2020)
// nissanCar.info();
// nissanCar.addDriver('Нісан Драйвер')
// console.log(nissanCar)


// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// class Car{
//     constructor(model, producer, year, maxspeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//     // drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     info(){
//         for (let carKey in this) {
//             if(typeof carKey!=='function'){
//                 console.log(`${carKey}-${this[carKey]}`)
//             }
//         }
//     }
   // increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
   //  increaseMaxSpeed(newSpeed){
   //      this.maxspeed=this.maxspeed+newSpeed
   //  }
//     // changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear(newValue){
//         this.year=newValue
//     }
    // addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    // addDriver(driver){
    //     this.driver=driver
    // }


//  let nissanCar = new Car('Nissan', 'Japan', 2015, 230, 1.6);
// console.log(nissanCar)
// nissanCar.drive()
// nissanCar.info()
// nissanCar.increaseMaxSpeed(20)
// nissanCar.changeYear(2020)
// nissanCar.info();
// nissanCar.addDriver('Нісан Драйвер')
// console.log(nissanCar)

// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let arrCinderella=[
//     new Cinderella('Vespe',19,34),
//     new Cinderella('Serenity',22,35),
//     new Cinderella('Yohanna',23,32),
//     new Cinderella('Gabriela',42,33),
//     new Cinderella('Winifred',24,36),
//     new Cinderella('Kali',27,37),
//     new Cinderella('katelyn',24,38),
//     new Cinderella('Yulianna',26,39),
//     new Cinderella('Sophie',20,40),
//     new Cinderella('Iliana',32,41)
// ]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince{
//     constructor(name, age, shoeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeFound = shoeFound;
//     }
// }
// let prince=new Prince("Vasja",33,35)
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let pair=(arrCinderella,prince)=>{
//     for (let arrCinderellaElement of arrCinderella) {
//         if(arrCinderellaElement.footSize===prince.shoeFound){
//             return `${arrCinderellaElement.name}`
//         }
//     }
// }
// console.log(pair(arrCinderella,prince))

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let find=arrCinderella.find(size=>size.footSize===prince.shoeFound)
// console.log(find)