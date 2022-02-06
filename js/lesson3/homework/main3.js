// створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num=[ 5,4,34,7,1]
// let word=['hello','world','okten','smile','shop']
// let bool=[5,9,2,43,65,'hello','world','okten','smile','shop',true,false]
// console.log(num,word,bool)

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let a=[]
// a[0]='hello';
// a[1]='smile';
// a[2]=10;
// a[3]=34;
// console.log(a)

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for(i=0;i<10;i++) {
//     document.write('<div>Довільний текст</div>')
// }
//
// for(i=0;i<10;i++) {
//     document.write(`<div>${i} Довільний текс</div>`)
// }
// let y=0
// while (y<20){
//     document.write('<h1>Довільний текс</h1>');
//     y++;
// }
//
// let y=0
// while (y<20){
//     document.write('<div>${y}-Довільний текс</div>');
//     y++;
// }

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers=[4,5,9,43,56,92,90,23,61,86]
// for (let number of numbers) {
//     console.log(number)
// }


// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let words=[`hello`,`terminal`,`text`,`number`,`world`,`okten`,`homework`,`table`,`bear`,`flat`]
// for (let word of words) {
//     console.log(word)
// }

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr=[`hello`,`terminal`,`text`,4,5,9,43,56,true,false]
// for (let arrElement of arr) {
//     console.log(arrElement)
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr=[`hello`,`terminal`,`text`,4,5,9,43,5>3,5>8,true]
// for (let arrElement of arr) {
//     if (typeof arrElement==="boolean")
//         console.log(arrElement)
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr=[`hello`,`terminal`,`text`,4,5,9,43,5>3,5>8,true]
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]===`number`){
//         console.log(arr[i])
//     }
// }

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr=[`hello`,`terminal`,`text`,4,5,9,43,5>3,5>8,true]
// for(i=0;i<arr.length;i++){
//     if(typeof arr[i]==='string'){
//         console.log(arr[i])
//     }
// }

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

//
// let arr=[]
// arr[0]='hello'
// arr[1]=43
// arr[2]=true
// arr[3]=75
// arr[4]=94
// arr[5]=-323
// arr[6]=false
// arr[7]='okten';
// arr[8]='Lviv';
// arr[9]='world';
// // for(i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for(let i=0;i<10;i++){
//     console.log(`Поточний номер кроку ${[i]}`)
//     document.write(`Поточний номер кроку ${[i]}`)
// }

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<100;i++){
//     console.log(`Поточний номер кроку: ${[i]}`)
//     document.write(`Поточний номер кроку: ${[i]}`)
// }

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(let i=0;i<100;i+=2){
//     console.log(`Поточний номер кроку: ${[i]}`)
//     document.write(`Поточний номер кроку: ${[i]}`)
// }

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(let i=0;i<100;i++){
//     if(i%2!==0){
//     console.log(`Поточний номер кроку: ${[i]}`)
//     document.write(`Поточний номер кроку: ${[i]}`)
//     }
// }

// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for(let i=0;i<100;i++){
//     if(i%2===0){
//         console.log(`Поточний номер кроку: ${i}`)
//         document.write(`Поточний номер кроку: ${i}`)
//     }
// }
