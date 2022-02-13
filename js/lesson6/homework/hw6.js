// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str='hello world';
// console.log(str.length);
//
// let str2='lorem ipsum';
// console.log(str2.length);
//
// let str3='javascript is cool';
// console.log(str3.length)

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let s='hello world,lorem ipsum,javascript is cool'
// let uper=s.toUpperCase()
// console.log(uper)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let s='HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL'
// let lower=s.toLowerCase()
// console.log(lower)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str= ' dirty string   ';
// console.log(str.replaceAll(' ',''))

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
//
// let stringToarray=(str)=>{
//     return str.split(' ')
// }
// document.write(stringToarray(str));

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// let str = 'Каждый охотник желает знать';
//
// let delete_characters=(str, length)=>{
//     return str.substr(0,length);
// }
// document.writeln(delete_characters(str, 10))

// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.

// let string= "HTML JavaScript PHP";
//
// let inset_dash=(str)=>{
//     let newStr=str.replaceAll(` `,`-`).toUpperCase();
//     return newStr
// }
// document.write(inset_dash(string))

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній

// let string= 'lorem ipsum dolor sit amet'
//
// let upper=(str)=>{
//     return str[0].toUpperCase()+str.slice(1)
// }
//
// console.log(upper(string))

// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let string= 'loRem iPsUm doLor Sit amEt'
// let capitalize=(str)=>{
//     return str.toLowerCase().split(' ').map(letter=>letter.charAt(0).toUpperCase()+letter.slice(1)).join(' ')
// }
// console.log(capitalize(string))

