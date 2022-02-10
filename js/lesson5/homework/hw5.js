// створити функцію яка обчислює та повертає площу прямокутника висотою
// let sRectangle=(a,b)=>a*b;
// console.log(sRectangle(5,5))

// створити функцію яка обчислює та повертає площу кола
//
// let sCircle=(r)=>3.14*r**2;
// console.log(sCircle(3))
//
// // створити функцію яка обчислює та повертає площу циліндру
//
// let sCylinder=(r,h)=>2*3.14*r*h;
// console.log(sCylinder(5,5));

// створити функцію яка приймає масив та виводить кожен його елемент

// let array=[4,5,8,2,8,2]
// let arrayElement=(arr)=>{
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i])
//     }
// }
// arrayElement(array);

// створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let txtCreator=(text)=>{
//     document.write(`<p>${text}</p>`)
// }
// txtCreator(`hello`)

// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let listCreator=(text)=>{
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
//
// }
// listCreator(`Okten`)

// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let listCreator=(text,num)=>{
//     for (i=0;i<num;i++){
//         document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//     }
// }
// listCreator(`smile`,5)

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array=[33,94,3,true,'okten','smile',false,"hello",'world']
//
// let listCreator=(arr)=>{
//     for (i=0;i<arr.length;i++){
//         document.write(`<ol>${arr[i]}</ol>`)
//     }
// }
// listCreator(array)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let person=[{id:1,name:`Yurii`,age:31},{id:4,name:`Oleg`,age:25},{id:3,name:`Nazar`,age:33}]
//
// let persons=(arr)=>{
//     for (let person1 of arr) {
//         document.write(`<div>${person1.id}:${person1.name}-${person1.age}</div>`)
//     }
// }
// persons(person)

