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

let array=[54,45,87,12,56,98,232,6,34]
function max(arr){
    for (let arrElement of arr) {
        if(arrElement>arrElement[0]){
            console.log(arrElement)
        }
    }
    return
}

max(array)

// створити функцію яка повертає найменьше число з масиву

// let array=[54,45,87,12,56,98,232,6,34]
// function min(arr){
//     for (let arrElement of arr) {
//     }
// }

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let array=[54,45,87,12,56,98,232,6,34]
// function total(arr){
//     let sum=0
//     sum=sum+array[0]
//     return sum;
// }
//
// total(array)

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше


// створити функцію яка заповнює масив рандомними числами Math.round(Math.random()*100))

function random() {
    let arrRandom=[];
}
console.log(random())

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function random(limit) {
    let arrRandom=[];
}
console.log(random())

// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverseArr() {
    let arr=[]
    for(i>=0,arr.length-1,i--){}
}