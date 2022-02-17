// Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let n=(string,symbol)=>{
//     let newN=[];
//     if(string.includes(symbol)){
//         let s=string.split(symbol);
//         s.forEach((item)=>{
//             if(item) newN.push(item)
//
//         })
//         console.log(newN.join(' '))
//     }
// }
// n(n1,'.')

// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random=(a,b)=>{
//     let newR=[]
//     for (let i = 0; i < a; i++) {
//         newR.push(Math.floor(Math.random()*b))
//     }
//     return newR
// }
// console.log(random(10, 100));

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let random=(x,y)=>{
//     let newRandom=[];
//     for (let i = 0; i < x; i++) {
//         newRandom.push(Math.floor(Math.random()*y));
//     } return newRandom.sort((a,b)=>a-b)
// }
// console.log(random(10,100))

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//  let random=(a,b)=>{
//     let newR=[];
//      for (let i = 0; i < a; i++) {
//          newR.push(Math.floor(Math.random()*b))
//      } return newR.filter(number=>number%2===0)
//  }
// console.log(random(10,100))

// [55, 49, 93, 87, 94, 56, 22, 95, 39, 54]
// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let random=(a,b)=>{
//     let newR=[];
//     for (let i = 0; i < a; i++) {
//         newR.push(Math.floor(Math.random()*b));
//     } return newR.map(value => value.toString())
// }
// console.log(random(10,100))

// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums=(arr,direction)=>{
//     if(direction==='ascending')
//         return arr.sort((a,b)=>a-b)
//     if (direction==='descending')
//         return arr.sort((a,b)=>b-a)
// }
//
// console.log(sortNums(nums,'descending'))

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// відсортувати його за спаданням за monthDuration

// let sort=coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration);
// console.log(sort)

// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filterFive=coursesAndDurationArray.filter((month)=>{
//     return month.monthDuration>5;
// })
// console.log(filterFive)

