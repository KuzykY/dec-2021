// створити функцію яка приймає три числа та виводить найменьше.

// function min(a,b,c){
//     if(a<b && a<c) {
//         document.write(a)
//         console.log(a)
//     } else if (b<c && b<a){
//         document.write(b)
//         console.log(b)
//     } else{
//         document.write(c)
//         console.log(c)
//     }
// }
// min(378,400,600)

// створити функцію яка приймає три числа та виводить найбільше

// function max(a,b,c){
//     if(a>b && a>c){
//         document.write(a);
//         console.log(a);
//     } else if (b>a && b>c){
//         document.write(b);
//         console.log(b)
//     } else {
//         document.write(c);
//         console.log(c)
//     }
// }
//
// max(45,55,65)

// створити функцію яка повертає найбільше число з масиву

// let array=[54,45,87,12,56,98,23,6,34]
// function maxArr(arr){
//     let max=arr[0]
//     for (let arrElement of arr) {
//         if (arrElement>max){
//             max=arrElement
//         }
//     }
//     return max
// }
// console.log(maxArr(array))

// створити функцію яка повертає найменьше число з масиву

// let array=[54,45,87,12,56,98,232,6,34]
// function minArr(arr){
//     let min=arr[0]
//     for (let arrElement of arr) {
//         if(arrElement<min){
//             min=arrElement
//         }
//     }
//     return min
// }
//  console.log(minArr(array))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let array=[54,45,87,12,56,98,232,6,34]
// function total(arr){
//     let sum=0;
//     for (let arrElement of arr) {
//         sum=sum+arrElement;
//     }
//     return sum;
// }
// console.log(total(array))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array=[54,45,87,12,56,98,232,6,34]
// function total(arr){
//     let sum=0;
//     for (let arrElement of arr) {
//         sum=sum+arrElement;
//     }
//     return sum/arr.length
// }
// console.log(total(array))


// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function maxNumber(numbers) {
//     let min=arguments[0];
//     let max=arguments[0];
//     for (let argument of arguments) {
//         if(argument<min){
//             min=argument
//         } else if (argument>max){
//             max=argument
//         }
//     }
//     console.log(max)
//     return min
// }
// maxNumber(54,69)


// створити функцію яка заповнює масив рандомними числами Math.round(Math.random()*100))

// function random(a) {
//     let arrRandom=[];
//     for(let i=0;i<a;i++){
//         arrRandom.push(Math.round(Math.random()*100))
//     }
//     return arrRandom
// }
// console.log(random(5))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function random(a,limit) {
//     let arrRandom=[];
//     for (let i=0;i<a;i++){
//         arrRandom.push(Math.round(Math.random()*limit))
//     }
//     return arrRandom
// }
// console.log(random(50,100))
//
// // Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// function reverseArr(arr) {
//     let reverseArray=[]
//     for(let i=arr.length-1;i>=0;i--){
//         reverseArray.push(arr[i])
//     }
//     return reverseArray
// }
// console.log(reverseArr(array))