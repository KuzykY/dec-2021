// Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let first=+prompt("Введіть перше число")
// let second=+prompt('Введіть друге число')
// if( first>second){
//     console.log(first)
// } else if (first===second){
//     console.log('Числа рівні')
// } else
//     console.log(second)



// У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let flatNumber=+prompt('Введіть номер квартири')
// if (flatNumber>=1 && flatNumber<=20){
//     console.log('Квартира знаходиться в першому під`їзді')
// } else if (flatNumber>=21 && flatNumber<=48){
//     console.log('Квартира знаходиться в другому під`їзді')
// } else if (flatNumber>=49 && flatNumber<=90){
//     console.log('Квартира знаходиться в третьому під`їзді')
// } else {
//     console.log("Некоректна введена квартира")
// }

// Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО


// let number=+prompt('Введіть число')
// if(number===10){
//     console.log('Вірно!')
// }
// else {
//     console.log('Невірно!')
// }


// Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else


let x=2
if(typeof x==='string'){
    console.log(1)
} else if (typeof x==='number'){
    console.log(2)
} else if( typeof x==="boolean"){
    console.log(3)
} else if( typeof x==="object"){
    console.log(4)
} else {
    console.log('Неправильні дані')
}




// Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp=+prompt("Введіть температуру повітря")
// if(temp>= 10 && temp<= 22){
//     console.log("Йдемо вчитися")
//     alert("Йдемо вчитися")
// } else {
//     console.log("Вчимось онлайн")
//     alert("Вчимось онлайн")
// }


