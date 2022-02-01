//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
let text = 'hello';
let secondText = 'owu';
let trirdText = 'com';
let fourthText = 'ua';
let firstNumber = 1;
let tenNumber = 10;
let negativeNumber = -999;
let ordinalNumber = 123;
let pi = 3.14;
let floatNumbers = 2.7;
let numbers = 16;
let a = true;
let b = false;

console.log(a, b, text, secondText, trirdText, fourthText, firstNumber, tenNumber, negativeNumber,
    ordinalNumber,pi,floatNumbers,numbers)
// alert(text)
// alert(secondText)
// alert(trirdText)
// alert(fourthText)
// alert(firstNumber)
// alert(tenNumber)
// alert(negativeNumber)
// alert(ordinalNumber)
// alert(pi)
// alert(floatNumbers)
// alert(numbers)
// alert(a)
// alert(b)
document.write([text,secondText,trirdText,fourthText,firstNumber,tenNumber,negativeNumber,
ordinalNumber,pi,floatNumbers,numbers,a,b])
//Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
text = 'world';
secondText = 'okten';
trirdText = 'gov';
fourthText = 'at';
firstNumber = 3;
tenNumber = 1000;
negativeNumber = -500;
ordinalNumber = 789;
pi = 3.141592;
floatNumbers = 6.5;
numbers = 50;
a = false;
b = true;
console.log(a, b, text, secondText, trirdText, fourthText, firstNumber, tenNumber, negativeNumber,
    ordinalNumber,pi,floatNumbers,numbers)
// alert(text)
// alert(secondText)
// alert(trirdText)
// alert(fourthText)
// alert(firstNumber)
// alert(tenNumber)
// alert(negativeNumber)
// alert(ordinalNumber)
// alert(pi)
// alert(floatNumbers)
// alert(numbers)
// alert(a)
// alert(b)
document.write([text,secondText,trirdText,fourthText,firstNumber,tenNumber,negativeNumber,
    ordinalNumber,pi,floatNumbers,numbers,a,b])
//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName='Юрій';
let middleName='Любомирович';
let lastName='Кузик';
let age=31;

let person=[firstName,middleName,lastName,age]

//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// prompt('Введіть Імя' )
// prompt('Введіть По-батькові' )
// prompt('Введіть Вік')
// alert('Вітаю ' + firstName +' '+ middleName + '.Тобі ' + age + ' років .')

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let aa=100
console.log(typeof aa)
let bb='100'
console.log(typeof bb)
let c=true
console.log(typeof c)
//Завдання 6
console.log(5!==6)
console.log(5>6)
console.log(5===6)
console.log(5>=6)

console.log(10>=10)
console.log(10==10)
console.log(10>10)
console.log(10!==10)
console.log(10<10)

console.log(123==='123')
console.log(123 =='123')

//Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = "20";
// let d = 5;
// document.write(str + d + "<br/>"); =205,тому що str перетворило d в стрічку,конкантенація.)
// document.write(str - d + "<br/>");=15;
// document.write(str * "2" + "<br/>");=40;
// document.write(str / 2 + "<br/>");=10;


//Errors

// let a = 100;
// let b = 500;
// let c = "hello";
// let d = "okten";
// const x = 'constant value';
// {
//     console.log(a);
//     x = 'new value';     const неможна змінювати!!!
// }
// let b = 'new value';      тут має бути без let,бо ми вже ввели змінну b,щоб її змінити треба просто написати b='new value'
//
// let result = 100 + y;
//
// console(result);