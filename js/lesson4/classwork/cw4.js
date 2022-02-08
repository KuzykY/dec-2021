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

// let array=[54,45,87,12,56,98,232,6,34]
// function max(arr){
//     for (let arrElement of arr) {
//
//     }
// }
//
// max(array)

// створити функцію яка повертає найменьше число з масиву

// let array=[54,45,87,12,56,98,232,6,34]
// function min(arr){
//     for (let arrElement of arr) {
//     }
// }

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

let array=[54,45,87,12,56,98,232,6,34]
function total(arr){
    let sum=0
    sum=sum+array[0]
    return sum;
}

total(array)