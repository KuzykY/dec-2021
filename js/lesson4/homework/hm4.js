// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function s(a,b) {
//    return a*b;
// }
// let resultS=s(20,540)
// console.log(resultS)

// створити функцію яка обчислює та повертає площу кола з радіусом r

// function sCircle(r) {
//     return 3.14*(r**2)
// }
// let resulrsCircle=sCircle(5)
// console.log(resulrsCircle)

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sCylinder(h,r){
//     return 2*3.14*h*r;
// }
// let resurtsCylinder=sCylinder(5,5);
// console.log(resurtsCylinder)

// створити функцію яка приймає масив та виводить кожен його елемент

// let array=[56,87,9,123,'okten','hello']
// function arr(array){
//     for (i=0;i<array.length;i++) {
//         document.write(array[i])
//     }
// }
// arr(array)

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function pCraetor(text) {
//     document.write(`<p>${text}</p>`)
// }
// pCraetor("Hello")

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulCraetor(argument) {
//     document.write(`<ul>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`</ul>`)
// }
// ulCraetor('hello')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulCreator(text,number) {
//     for(i=0;i<number;i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//     }
// }
// ulCreator('wrefr',3)

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr=[34,66,87,true,'okten','smile',false,"hello",'world']
//
// function olCreator(array){
//     document.write(`<ol>`)
//     for(i=0;i<array.length;i++){
//         document.write(`<li>${array[i]}</li>`)
//             }
//     document.write(`</ol>`)
// }
// olCreator(arr)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий

// let user=[{id: 43,name:'Yurii',age:31},{id: 48,name:'Oleg',age: 56},{id:56,name:'Andrii',age:33}]
// function users(arr) {
//     for (let arrElement of arr) {
//         document.write(`<div>${arrElement.id}:${arrElement.name}-${arrElement.age}</div>`)
//     }
// }
// users(user)
