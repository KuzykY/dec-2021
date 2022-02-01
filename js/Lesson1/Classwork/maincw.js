// //Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let numbers = [4, 76, 4, 9, 96, 82, -65, -32, 90, 33]
let result = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9];
console.log(result)


//Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    nameBook1: 'Rice assault',
    numberPages1: 416,
    genreBook1: 'Help yourself'
}
//Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    nameBook2: '7 habits of extremely effective people',
    numberPages2: 384,
    genreBook2: 'Help yourself',
    authorBook2: 'Stephen Covey'
}
//Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
        firstBook = {
            name: 'The Da Vinci Code',
            numberPages: 480,
            genreBooks: 'Detective story',
            authorBook: 'Dan Brown'
        },
        secondBook = {
            name: 'ALCHEMIST',
            numberPages: 288,
            genreBooks: 'Mythical quest',
            authorBook: {
                name : 'PAULO COLEO',
                age : 32
            }
        },
        thirdBook = {
            name: 'QUOTES FROM THE WORKS OF MAO ZEDONG',
            numberPages: 736,
            genreBooks: 'A short collection of key phrases',
            authorBook: 'MAO JEDON'
        }
    ]

console.log(books[0])
// console.log(books.topBooks[1])
// console.log(books.topBooks[2])

//Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
let height = 23
let width = 10
let s = height * width
console.log(s)

//Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let heightC = 10
let dC = 4
const Pi = 3.14
v = Pi * ((dC / 2) ** 2) * heightC
console.log(v)

//У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3
let m = 4
// let nm = (n ** 2) + (m ** 2)
// let k=Math.pow(nm, 1 / 2)
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2))
console.log(k)
// Math.sqrt(k)
