// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=+prompt("Введіть число від 0 до 59");
if (time>=0 && time<=14){
    console.log("Перша частина години");
} else if (time>=15 && time<=29){
    conlose.log('Друга частина години');
} else if (time>=30 && time<=44){
    console.log('Треття частина години');
} else if (time>=45 && time<=59){
    console.log('Четверта частина години')
} else {
    console.log("Неправильні дані")
}


