// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function f() {
//     if(arguments.length===1){
//         console.log(arguments[0])
//     } else if(arguments.length===2){
//         return arguments[0]+arguments[1]
//     } else {
//         document.write('Введіть два числа')
//     }
// }
//  console.log(f(4,5))

// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let array=[3,5,8,2,3]
// let array2=[5,6,8,4,8]
// function sumArr(arr){
//     let newSumArr=[]
//     for(i=0,u=0;i<array.length,u<array2.length;i++,u++){
//         newSumArr.push(array[i]+array2[u])
//
//     }
//     return newSumArr
// }
//
// console.log(sumArr(array,array2))

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

let array=[{id: 43,name:'Yurii',age:31}]
function objects(arr) {
    let objectArr=[]
    let arrKeys=[]
    for (let arrElement of arr) {
     objectArr.push(`${arrElement}`)}
    for (let arrKey in objectArr) {
        arrKeys.push(`${arrKey}`)
    }
    return arrKeys
}
console.log(objects(array))

// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// let array=[{id: 43,name:'Yurii',age:31}]
// function objects(arr) {
//     let objectArr=[]
//     for (let arrElement of arr) {
//         objectArr.push(`${arrElement.id},${arrElement.name},${arrElement.age}`)
//     }
//     return objectArr
// }
// console.log(objects(array))



