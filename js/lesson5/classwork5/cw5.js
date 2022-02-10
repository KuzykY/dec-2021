// створити функцію яка приймає три числа та виводить найменьше.

// let min=(a,b,c)=>{
//     if(a<b && a<c){
//         console.log(a)
//     } else if (b<a && b<c){
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// min(8,9,7)
//
// створити функцію яка приймає три числа та виводить найбільше.
//
// let max=(a,b,c)=>{
//     if(a>b && a>c){
//         console.log(a)
//     }else if (b>a && b>c){
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// max(55,2,10)

// створити функцію яка повертає найбільше число з масиву
//
// let array=[4,6,1,87,65,23,30]
//
// let max=(arr)=>{
//     let maxNum=arr[0]
//     for (let arrElement of arr) {
//         if(arrElement>maxNum){
//             maxNum=arrElement
//         }
//     }return maxNum
// }
// console.log(max(array))

// створити функцію яка повертає найменьше число з масиву

// let array=[4,6,1,87,65,23,30]
//
// let min=(arr)=>{
//     let minNum=arr[0];
//     for (let arrElement of arr) {
//         if(arrElement<minNum){
//             minNum=arrElement
//         }
//     }return minNum
// }
// console.log(min(array))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його

// let array=[4,6,1,87,65,23,30]
//
// let total=(arr)=>{
//     let sum=0;
//     for (let arrElement of arr) {
//         sum=arrElement+sum
//     }
//     return sum
// }
// console.log(total(array))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array=[4,6,1,87,65,23,30]
//
// let average=(arr)=>{
//     let avr=0;
//     for (let arrElement of arr) {
//         avr=arrElement+avr/2
//     } return avr
// }
// console.log(average(array))

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// let minMax=(...number)=>{
//     let max=number[0];
//     let min=number[0];
//     for (let argument of number) {
//         if(argument<min){
//             min=argument
//         } else if(argument>max){
//             max=argument
//         }
//     }
//     console.log(max)
//     return min
// }
// minMax(45,54,67)

// створити функцію яка заповнює масив рандомними числами
//
// let random=(x)=>{
//     let arrRandom = []
//     for (let i = 0; i < x; i++) {
//         arrRandom.push(Math.round(Math.random() * 100))
//     }
//     return arrRandom
// }
//  console.log(random(40))

// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let random=(x,limit)=>{
//     let randomArr=[];
//     for(i=0;i<x;i++){
//         randomArr.push(Math.round(Math.random()*limit))
//     }
//     return randomArr
// }
// console.log(random(80,400))

// Функція приймає масив та робить з нього новий масив в зворотньому порядку.
//
// let array=[6,0,2,5]
// let revers = (arr)=>{
//     let reversArr=[];
//     for (i=arr.length-1;i>=0;i--){
//         reversArr.push(arr[i])
//     }
//     return reversArr
// }
// console.log(revers(array))